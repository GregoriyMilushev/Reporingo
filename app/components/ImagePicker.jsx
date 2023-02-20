import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

const SelectImage = () => {
  const [image, setImage] = useState(null);

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Gallery"
          titleStyle={{
            color: 'black',
          }}
          buttonStyle={{
            backgroundColor: '#efefef',
            borderRadius: 3,
            height: 40,
          }}
          containerStyle={{
            height: 40,
            width: '50%',
            paddingHorizontal: 5,
          }}
          onPress={pickImageFromGallery}
        />
        <Button
          title="Camera"
          titleStyle={{
            color: 'black',
          }}
          buttonStyle={{
            backgroundColor: '#efefef',
            borderRadius: 3,
            height: 40,
          }}
          containerStyle={{
            height: 40,
            width: '50%',
            paddingHorizontal: 5,
          }}
          onPress={takePhoto}
        />
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    top: 0,
    left: 0,
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default SelectImage;
