import { useState, useEffect } from 'react';
import { supabase } from '../helpers/supabaseClient';
import { StyleSheet, View, Alert, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Avatar({ url, size = 150, onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const avatarSize = { height: size, width: size };
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);

      if (error) {
        throw error;
      }

      const fr = new FileReader();
      fr.readAsDataURL(data);
      fr.onload = () => {
        setAvatarUrl(fr.result);
      };
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message);
      }
    }
  }

  async function uploadAvatar() {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need media library permissions to make this work!');
      return;
    }

    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    console.log(photo);
    if (!photo.canceled) {
      const fileName = photo.assets[0].uri.substring(photo.assets[0].uri.lastIndexOf('/') + 1);

      const { data, error } = await supabase.storage.from('images').upload(fileName, photo, {
        cacheControl: '3600',
        upsert: false,
      });

      if (error) {
        throw new Error(error.message);
      }
    }
  }

  return (
    <View>
      {avatarUrl ? (
        <Image
          source={{ uri: avatarUrl }}
          accessibilityLabel="Avatar"
          style={[avatarSize, styles.avatar, styles.image]}
        />
      ) : (
        <View style={[avatarSize, styles.avatar, styles.noImage]} />
      )}
      <View>
        <Button
          title={uploading ? 'Uploading ...' : 'Upload'}
          onPress={() => uploadAvatar()}
          disabled={uploading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 5,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  image: {
    objectFit: 'cover',
    paddingTop: 0,
  },
  noImage: {
    backgroundColor: '#333',
    border: '1px solid rgb(200, 200, 200)',
    borderRadius: 5,
  },
});
