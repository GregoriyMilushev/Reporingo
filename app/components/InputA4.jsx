import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputA4 = ({ setFormData, inputValue, selectNextElement }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('A4');
      setData(data.map((x) => x.value));
    };

    getData();
  }, []);

  const handleValueSelect = (value) => {
    setFormData((prevState) => {
      return { ...prevState, A4: value };
    });
    selectNextElement();
  };

  return (
    <Dropdown
      label={'A4'}
      data={data}
      onSelect={handleValueSelect}
      selected={inputValue}
    ></Dropdown>
  );
};

const styles = StyleSheet.create({});

export default InputA4;
