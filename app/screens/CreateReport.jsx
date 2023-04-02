import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import MultiStepForm from '../components/MultiStepForm';

export default function CreateReport({ navigation }) {
  const route = useRoute();
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

  return (
    <ScrollView style={styles.container}>
      <MultiStepForm></MultiStepForm>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e262e',
  },
});
