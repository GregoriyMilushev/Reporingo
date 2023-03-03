import React, { useEffect, useState } from 'react';
import { InteractionManager, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputB2 = ({ setFormData, inputValue, selectNextElement }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('B2');
      setData(data.map((x) => x.value));
    };

    getData();
  }, []);

  const [leftValue, setLeftValue] = useState(inputValue ? inputValue.split('-')[0] : '');
  const [rightValue, setRightValue] = useState(inputValue ? inputValue.split('-')[1] : 0);

  const handleLeftChange = (value) => {
    setLeftValue(value);
    console.log(value);
    handleTextChange(`${value}-${rightValue}`);
  };

  const handleRightChange = (text) => {
    setRightValue(text);
    handleTextChange(`${leftValue}-${text}`);
  };

  const handleTextChange = (newText) => {
    setFormData((prevState) => {
      return { ...prevState, B2: newText };
    });
  };

  return (
    <View keyboardShouldPersistTaps="always" style={styles.container}>
      <Dropdown
        label={'B2'}
        data={data}
        onSelect={handleLeftChange}
        selected={leftValue}
        small={true}
      ></Dropdown>
      <Text style={styles.dash}>-</Text>
      <TextInput
        style={styles.input}
        value={rightValue}
        onChangeText={handleRightChange}
        keyboardType="numeric"
      />
    </View>
  );
};

export default InputB2;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inputContent: {},

  input: {
    width: 105,
    height: 60,
    backgroundColor: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dash: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
});
