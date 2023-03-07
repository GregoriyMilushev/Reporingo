import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputD3 = ({ setFormData, inputValue, selectNextElement }) => {
  const leftInputRef = useRef();
  const rightInputRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('D3');
      setData(data.map((x) => x.value));
    };

    getData();
  }, []);

  const [leftValue, setLeftValue] = useState(inputValue ? inputValue.split('-')[0].slice(1) : 0);
  const [rightValue, setRightValue] = useState(inputValue ? inputValue.split('-')[1].slice(1) : 0);
  const [dropdownValue, setDropdownValue] = useState(inputValue ? inputValue.split('-')[0][0] : '');

  const handleLeftChange = (text) => {
    setLeftValue(text);
    handleTextChange(`${dropdownValue}${text}-${dropdownValue}${rightValue}`);
  };

  const handleRightChange = (text) => {
    setRightValue(text);
    handleTextChange(`${dropdownValue}${leftValue}-${dropdownValue}${text}`);
  };

  const handleDropdownChange = (text) => {
    setTimeout(() => {
      leftInputRef.current?.blur();
      leftInputRef.current?.focus();
    }, 100);
    setDropdownValue(text);
    handleTextChange(`${text}${leftValue}-${text}${rightValue}`);
  };

  const handleTextChange = (newText) => {
    setFormData((prevState) => {
      return { ...prevState, D3: newText };
    });
  };

  const onLeftInputSubmit = () => {
    setTimeout(() => {
      rightInputRef.current?.blur();
      rightInputRef.current?.focus();
    }, 100);
  };

  const onRightInputSubmit = () => {
    if (dropdownValue && leftValue) {
      selectNextElement();
    }
  };

  return (
    <>
      <Dropdown
        label={'D3'}
        data={data}
        onSelect={handleDropdownChange}
        selected={dropdownValue}
      ></Dropdown>

      <View keyboardShouldPersistTaps="always" style={styles.container}>
        <TextInput
          ref={leftInputRef}
          style={styles.input}
          value={leftValue}
          onChangeText={handleLeftChange}
          keyboardType="numeric"
          placeholder={'Min'}
          onSubmitEditing={onLeftInputSubmit}
        />
        <Text style={styles.dash}>-</Text>
        <TextInput
          ref={rightInputRef}
          style={styles.input}
          value={rightValue}
          onChangeText={handleRightChange}
          keyboardType="numeric"
          placeholder={'Max'}
          onSubmitEditing={onRightInputSubmit}
        />
      </View>
    </>
  );
};

export default InputD3;

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
