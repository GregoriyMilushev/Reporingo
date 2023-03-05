import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { InteractionManager, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputD2 = ({ setFormData, inputValue, selectNextElement }) => {
  const [data, setData] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('D2');
      setData(data.map((x) => x.value));
    };

    getData();
  }, []);

  const [leftValue, setLeftValue] = useState(inputValue ? inputValue.split('-')[0] : '');
  const [rightValue, setRightValue] = useState(inputValue ? inputValue.split('-')[1] : 0);

  const handleLeftChange = (value) => {
    setTimeout(() => {
      inputRef.current?.blur();
      inputRef.current?.focus();
    }, 100);
    setLeftValue(value);
    handleTextChange(`${value}-${rightValue}`);
  };

  const handleRightChange = (text) => {
    setRightValue(text);
    handleTextChange(`${leftValue}-${text}`);
  };

  const handleTextChange = (newText) => {
    setFormData((prevState) => {
      return { ...prevState, D2: newText };
    });
  };

  const onInputSubmit = () => {
    if (leftValue) {
      selectNextElement();
    }
  };

  return (
    <View keyboardShouldPersistTaps="always" style={styles.container}>
      <Dropdown
        label={'D2'}
        data={data}
        onSelect={handleLeftChange}
        selected={leftValue}
        small={true}
      ></Dropdown>
      <Text style={styles.dash}>-</Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={rightValue}
        onChangeText={handleRightChange}
        keyboardType="numeric"
        onSubmitEditing={onInputSubmit}
      />
    </View>
  );
};

export default InputD2;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    width: 85,
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
