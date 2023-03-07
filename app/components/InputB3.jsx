import React, { useState } from 'react';
import { useEffect } from 'react';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputB3 = ({ setFormData, inputValue, selectNextElement }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('B3');
      setData(data.map((x) => x.value));
    };

    getData();
  }, []);

  const handleValueSelect = (value) => {
    setFormData((prevState) => {
      return { ...prevState, B3: value };
    });
    selectNextElement();
  };

  return (
    <Dropdown
      label={'B3'}
      data={data}
      onSelect={handleValueSelect}
      selected={inputValue}
    ></Dropdown>
  );
};

export default InputB3;
