import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import Dropdown from '../components/Dropdown';
import { Button } from 'react-native-elements';
import { dataOne, dataThree, dataTwo } from '../dummyData';
import SelectImage from '../components/ImagePicker';
import Report from '../supabase/report';
import Image from '../supabase/image';

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
  };

  const onSubmit = async () => {
    const fileName = `${Date.now()}.png`;
    let { data, error } = await Image.upload({ fileName, image });
    console.log(data);

    const report = {
      selectedOne,
      selectedTwo,
      selectedThree,
      text,
      imagePath,
    };

    // { data, error } = await Report.create(report);

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
