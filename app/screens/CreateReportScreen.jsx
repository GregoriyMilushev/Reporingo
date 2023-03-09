import { useState, useEffect, useF } from 'react';
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
import SelectImage from '../components/ImagePicker';
import Report from '../supabase/report';
import Storage from '../supabase/storage';
import CreateForm from '../components/CreateForm';
import { useRoute } from '@react-navigation/native';

export default function CreateReportScreen({ navigation }) {
  const route = useRoute();
  const [image, setImage] = useState(undefined);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const { reportData = null } = route.params || {};

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

  useEffect(() => {
    resetForm();
    setSelectedElement('A1');
    if (reportData && Object.keys(reportData).length !== 0) {
      const newFormData = {};
      for (const data of Object.entries(reportData.report)) {
        newFormData[data[0]] = data[1];
      }
      setFormData(newFormData);
      navigation.setParams({ name: `Editing order: ${reportData.id}` });
    }
  }, [reportData]);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const selectImage = async (image) => {
    setImage(image);
    if (image) {
      const imageUrl = await Storage.uploadImage(image);

      if (!imageUrl) {
        Alert.alert('There was an error uploading the image. Please try again.');
        return;
      }

      setFormData((prevState) => {
        return {
          ...prevState,
          imageUrl: imageUrl.publicUrl,
        };
      });
    }
  };

  const resetForm = () => {
    setFormData((prevState) => {
      return {
        ...prevState,
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
      };
    });
  };

  const onSubmit = async () => {
    setLoading(true);
    // this navigates to SingleReport, where report is confirmed.
    navigation.navigate('SingleReport', {
      toBeConfirmed: true,
      isEdit: !!reportData?.id, // if id is present, then edit
      reportData: { id: reportData?.id, report: formData },
    });

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
