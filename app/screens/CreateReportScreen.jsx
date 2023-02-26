import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Dropdown from '../components/Dropdown';
import { Button } from 'react-native-elements';
import { dataOne, dataThree, dataTwo } from '../dummyData';
import SelectImage from '../components/ImagePicker';
import Report from '../supabase/report';
import Storage from '../supabase/storage';
import CreateForm from '../components/CreateForm';

export default function CreateReportScreen() {
  const [image, setImage] = useState(undefined);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const [formData, setFormData] = useState({
    A1: null,
    A2: null,
    A3: null,
    A4: null,
    B1: null,
    B2: null,
    B3: null,
    B4: null,
    C1: null,
    C2: null,
    C3: null,
    C4: null,
    D1: null,
    D2: null,
    D3: null,
    D4: null,
    comment: null,
    imageUrl: null,
  });

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const selectImage = (image) => {
    setImage(image);
  };

  const resetForm = () => {
    setSelectedOne(undefined);
    setSelectedTwo(undefined);
    setSelectedThree(undefined);
    setImage(undefined);
    setText('');
  };

  const onSubmit = async () => {
    setLoading(true);
    let imageUrl;
    if (image) {
      imageUrl = await Storage.uploadImage(image);

      if (!imageUrl) {
        Alert.alert('There was an error uploading the image. Please try again.');
        return;
      }
    }

    const report = {
      selectedOne,
      selectedTwo,
      selectedThree,
      text,
      imageUrl: imageUrl ? imageUrl.publicUrl : '',
    };

    const { data, error } = await Report.create(report);

    if (error) {
      Alert.alert('Report create failed. Please try again.');
    } else {
      Alert.alert(`Form submitted successfully.`);
      resetForm();
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.form}>
        <CreateForm
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
          formData={formData}
          setFormData={setFormData}
        ></CreateForm>
        {/* <View style={[styles.dropdown, styles.dropdownFirst]}>
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
        </View> */}

        {/* <View style={styles.dropdown}>
          <Text style={styles.label}>Comment Label</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleTextChange}
            value={text}
            placeholder="Add comment..."
          />
        </View> */}

        <View style={styles.imagePicker}>
          <Text style={styles.label}>Image label</Text>
          <SelectImage onChange={selectImage}></SelectImage>
        </View>
      </ScrollView>

      <Button
        title="SUBMIT REPORT"
        loading={loading}
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
          marginTop: 20,
        }}
        onPress={onSubmit}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 40,
    paddingBottom: 20,
  },

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

  imagePicker: { height: 60, width: '95%', alignSelf: 'center', paddingBottom: 10 },
});
