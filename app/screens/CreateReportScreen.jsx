import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Dropdown from '../components/Dropdown';
import { Button } from 'react-native-elements';

export default function CreateReportScreen() {
  const [selectedOne, setSelectedOne] = useState(undefined);
  const [selectedTwo, setSelectedTwo] = useState(undefined);
  const [selectedThree, setSelectedThree] = useState(undefined);

  const dataOne = [
    { label: 'A1', value: 'A1' },
    { label: 'A2', value: 'A2' },
    { label: 'A3', value: 'A3' },
    { label: 'A4', value: 'A4' },
    { label: 'A5', value: 'A5' },
    { label: 'A6', value: 'A6' },
    { label: 'A7', value: 'A7' },
    { label: 'A8', value: 'A8' },
    { label: 'A9', value: 'A9' },
  ];

  const dataTwo = [
    { label: 'B1', value: 'B1' },
    { label: 'B2', value: 'B2' },
    { label: 'B3', value: 'B3' },
    { label: 'B4', value: 'B4' },
    { label: 'B5', value: 'B5' },
    { label: 'B6', value: 'B6' },
    { label: 'B7', value: 'B7' },
    { label: 'B8', value: 'B8' },
    { label: 'B9', value: 'B9' },
  ];

  const dataThree = [
    { label: 'C1', value: 'C1' },
    { label: 'C2', value: 'C2' },
    { label: 'C3', value: 'C3' },
    { label: 'C4', value: 'C4' },
    { label: 'C5', value: 'C5' },
    { label: 'C6', value: 'C6' },
    { label: 'C7', value: 'C7' },
    { label: 'C8', value: 'C8' },
    { label: 'C9', value: 'C9' },
  ];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.dropdown}>
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
        onPress={() => Alert.alert('Form Submitted')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 50,
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
    textAlign: 'left',
  },
});
