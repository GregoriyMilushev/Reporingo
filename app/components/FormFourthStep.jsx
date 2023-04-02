import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import Dropdown from './Dropdown';
import OptionInput from './OptionInput';
import OptionModal from './OptionModal';

export default function FormFourthStep() {
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
      <Text style={styles.title}>Drilling Parameters</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>RPM</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>WOB</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Torque</Text>
        <View style={styles.torqueInputs}>
          <TextInput placeholder="MIN" style={[styles.input, styles.torqueInput, styles.text]} />
          <TextInput placeholder="MAX" style={[styles.input, styles.torqueInput, styles.text]} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pum pressure</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
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
  torqueInputs: {
    flexDirection: 'row',
    gap: 20,
  },
  torqueInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 22,
  },
});
