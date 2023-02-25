import React from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const SelectImage = ({ onChange }) => {
  const pickImageFromGallery = async () => {
    // Give Access to phone galery
    // let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // if (status !== 'granted') {
    //   alert('Sorry, we need media library permissions to make this work!');
    //   return;
    // }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        const base64string = await convertImageToBase64(result);
        onChange(base64string);
      }
    } catch (error) {
      Alert.alert('There was problem processing your image. Please try again.');
    }
  };

  const takePhoto = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        quality: 1,
      });

      if (!result.canceled) {
        const base64string = await convertImageToBase64(result);
        onChange(base64string);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('There was problem processing your image. Please try again.');
    }
  };

  const convertImageToBase64 = async (file) => {
    try {
      const binaryString = await FileSystem.readAsStringAsync(file.assets[0].uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return `data:image/jpeg;base64,${binaryString}`;
    } catch (error) {
      console.error(error);
      throw new Error('There was an error processing your image. Please try again.');
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
      {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
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
