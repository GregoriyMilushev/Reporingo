import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputC1 = ({ setFormData, inputValue }) => {
  const [dropdownData, setData] = useState([]);
  const [selected, setSelected] = useState();
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('C3');

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
  };

  const handleTextChange = async (value) => {
    if (value.length <= 3 && /^[0-9]+$/.test(value)) {
      setNumber(value);
      setFormData((prevState) => {
        return { ...prevState, C3: selected + value };
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

  return (
    <View>
      <Dropdown
        label={'C3'}
        data={dropdownData}
        onSelect={handleDropdownSelect}
        selected={selected}
      ></Dropdown>
      <Input
        inputContainerStyle={styles.container}
        inputStyle={styles.input}
        value={number}
        placeholder="XXX"
        keyboardType="numeric"
        maxLength={3}
        onChangeText={handleTextChange}
        onBlur={handleBlur}
        errorMessage={error}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
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
