import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputA2 = ({ setFormData, inputValue, selectNextElement }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('A2');
      setData(data.map((x) => x.value));
    };

    getData();
  }, []);

  const handleValueSelect = (value) => {
    setFormData((prevState) => {
      return { ...prevState, A2: value };
    });
    selectNextElement();
  };

  return (
    <Dropdown
      label={'A2'}
      data={data}
      onSelect={handleValueSelect}
      selected={inputValue}
    ></Dropdown>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default InputA2;
