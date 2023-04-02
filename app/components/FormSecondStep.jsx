import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import OptionInput from './OptionInput';

export default function FormSecondStep() {
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
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Tool Characteristics</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tool type</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tool number</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Reamers</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Powerspring</Text>
          <View style={styles.wrapper}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Wire D</Text>
              <OptionInput
                selected={selectedOption}
                handleOptionSelect={handleOptionSelect}
                handleModalClose={handleModalClose}
                modalVisible={modalVisible}
                handleModalOpen={handleModalOpen}
                showLabel={false}
              ></OptionInput>
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Length</Text>
              <OptionInput
                selected={selectedOption}
                handleOptionSelect={handleOptionSelect}
                handleModalClose={handleModalClose}
                modalVisible={modalVisible}
                handleModalOpen={handleModalOpen}
                showLabel={false}
              ></OptionInput>
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Washer</Text>
              <OptionInput
                selected={selectedOption}
                handleOptionSelect={handleOptionSelect}
                handleModalClose={handleModalClose}
                modalVisible={modalVisible}
                handleModalOpen={handleModalOpen}
                showLabel={false}
              ></OptionInput>
            </View>
          </View>
        </View>
      </View>
    </>
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
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the top
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputBlock: {
    flexDirection: 'column', // Change direction to column
    alignItems: 'center',
    maxWidth: '25%',
  },
});
