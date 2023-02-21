import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Dropdown from '../components/Dropdown';
import { Button } from 'react-native-elements';
import { dataOne, dataThree, dataTwo } from '../dummyData';
import SelectImage from '../components/ImagePicker';
import { supabase } from '../helpers/supabaseClient';

export default function CreateReportScreen() {
  const [selectedOne, setSelectedOne] = useState(undefined);
  const [selectedTwo, setSelectedTwo] = useState(undefined);
  const [selectedThree, setSelectedThree] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const onUploadImage = (newImage) => {
    setImage(newImage);
    console.log(image, 'The Image');
  };

  const uploadImageInStorage = async () => {
    // TODO:Add filename!!!
    const { data, error } = await supabase.storage.from('images').upload(fileName, photo, {
      cacheControl: '3600',
      upsert: false,
    });

    if (error) {
      // throw new Error(error.message);
      Alert.alert(error.message);
    }

    return data;
  };

  const onSubmit = async () => {
    console.log('HERE Submit');
    const imagePath = uploadImageInStorage();
    console.log(imagePath, 'Image PAth');
    let { data, error } = await supabase
      .from('events')
      .insert([
        {
          first: selectedOne,
          second: selectedTwo,
          third: selectedThree,
          comment: text,
          image_url: imagePath,
        },
      ])
      .select();
    console.log(data);

    if (error) {
      Alert.alert(error.message);
    } else {
      Alert.alert(`Form Submitted`);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.dropdown, styles.dropdownFirst]}>
          <Text style={styles.label}>First Label</Text>
          <Dropdown
            label="Select Item"
            data={dataOne}
            onSelect={setSelectedOne}
            selected={selectedOne}
          />
        </View>

        <View style={styles.dropdown}>
          <Text style={styles.label}>Second Label</Text>
          <Dropdown
            label="Select Item"
            data={dataTwo}
            onSelect={setSelectedTwo}
            selected={selectedTwo}
          />
        </View>

        <View style={styles.dropdown}>
          <Text style={styles.label}>Third Label</Text>
          <Dropdown
            label="Select Item"
            data={dataThree}
            onSelect={setSelectedThree}
            selected={selectedThree}
          />
        </View>

        <View style={styles.dropdown}>
          <Text style={styles.label}>Comment Label</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleTextChange}
            value={text}
            placeholder="Add comment..."
          />
        </View>

        <View style={styles.imagePicker}>
          <Text style={styles.label}>Image label</Text>
          <SelectImage onChange={onUploadImage}></SelectImage>
        </View>
      </View>

      <Button
        title="SUBMIT REPORT"
        buttonStyle={{
          backgroundColor: '#82c773',
          borderRadius: 3,
          height: 60,
        }}
        containerStyle={{
          height: 60,
          width: '100%',
          paddingHorizontal: 20,
          marginBottom: 40,
        }}
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownFirst: {
    marginTop: 40,
    alignItems: 'center',
    textAlign: 'left',
  },
  dropdown: {
    marginTop: 25,
    alignItems: 'center',
    textAlign: 'left',
  },

  container: {
    backgroundColor: '#1e262e',
    height: '100%',
    justifyContent: 'space-between',
  },

  label: {
    color: 'white',
    marginBottom: 10,
    marginEnd: 'auto',
    paddingLeft: 10,
  },

  input: {
    backgroundColor: '#efefef',
    height: 50,
    width: '95%',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },

  imagePicker: { height: 60, width: '95%', alignSelf: 'center' },
});
