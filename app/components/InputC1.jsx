import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputC1 = ({ setFormData, inputValue, selectNextElement }) => {
  const [dropdownData, setData] = useState([]);
  const [selected, setSelected] = useState();
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    // setTimeout(() => {
    //   inputRef.current?.blur();
    //   inputRef.current?.focus();
    // }, 100);

    const getData = async () => {
      const { data, error } = await CellData.getValues('C1');

      setData(data.map((x) => x.value));
      if (inputValue) {
        const digits = inputValue.replace(/\D/g, '');
        const letters = inputValue.replace(/\d/g, '');
        setNumber(digits);
        setSelected(letters);
      } else {
        setSelected(data[0].value);
      }
    };

    getData();
  }, []);

  const handleDropdownSelect = (value) => {
    setSelected(value);
    setTimeout(() => {
      inputRef.current?.blur();
      inputRef.current?.focus();
    }, 100);
  };

  const handleTextChange = async (value) => {
    if (value.length <= 4 && /^[0-9]+$/.test(value)) {
      setNumber(value);
      setFormData((prevState) => {
        return { ...prevState, C1: selected + value };
      });
      setError('');
    }
  };

  const handleBlur = () => {
    // Show error if input is empty
    if (number.length === 0) {
      setError('Please enter a number');
    }
  };

  const handleInputSubmit = () => {
    selectNextElement();
  };

  return (
    <View>
      <Dropdown
        label={'C1'}
        data={dropdownData}
        onSelect={handleDropdownSelect}
        selected={selected}
      ></Dropdown>
      <Input
        ref={inputRef}
        inputContainerStyle={styles.container}
        inputStyle={styles.input}
        value={number}
        placeholder="XXXX"
        keyboardType="numeric"
        maxLength={4}
        onChangeText={handleTextChange}
        onBlur={handleBlur}
        errorMessage={error}
        onSubmitEditing={handleInputSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    // backgroundColor: '#fff',
    padding: 10,
    // borderRadius: 5,
    // marginVertical: 10,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default InputC1;
