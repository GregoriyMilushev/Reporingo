import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import Dropdown from './Dropdown';
import OptionInput from './OptionInput';
import OptionModal from './OptionModal';

export default function FormThirdStep() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cut Data</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Depth</Text>
        <View style={styles.row}>
          <TextInput style={styles.input} />
          <Text style={styles.units}>m</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Length</Text>
        <View style={styles.row}>
          <TextInput style={styles.input} />
          <Text style={styles.units}>m</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Toolface</Text>
        <View style={styles.row}>
          <TextInput style={styles.input} />
          <Text style={styles.units}>deg</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>ROP</Text>
        <View style={styles.row}>
          <TextInput style={styles.input} />
          <Text style={styles.units}>cm/min</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1e262e',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    flex: 1,
    maxWidth: '65%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  units: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
});
