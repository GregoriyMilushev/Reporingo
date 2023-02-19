import 'react-native-url-polyfill/auto';
import { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import Dropdown from './app/components/Dropdown';
import { Text } from 'react-native-elements';

export default function App() {
  const [selected, setSelected] = useState(undefined);
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
    { label: 'Five', value: '5' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];

  return (
    <View style={styles.container}>
      {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )}
      <Dropdown label="Select Item" data={data} onSelect={setSelected} selected={selected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
});
