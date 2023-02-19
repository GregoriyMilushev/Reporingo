import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from '../components/Dropdown';

export default function CreateReportScreen() {
  const [selectedOne, setSelectedOne] = useState(undefined);
  const [selectedTwo, setSelectedTwo] = useState(undefined);

  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
  ];

  return (
    <View>
      <View style={styles.container}>
        {!!selectedOne && (
          <Text>
            Selected: label = {selectedOne.label} and value = {selectedOne.value}
          </Text>
        )}
        <Dropdown
          label="Select Item"
          data={data}
          onSelect={setSelectedOne}
          selected={selectedOne}
        />
      </View>

      <View style={styles.container}>
        {!!selectedTwo && (
          <Text>
            Selected: label = {selectedTwo.label} and value = {selectedTwo.value}
          </Text>
        )}
        <Dropdown
          label="Select Item"
          data={data}
          onSelect={setSelectedTwo}
          selected={selectedTwo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
});
