import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputC2 = ({ setFormData, inputValue, selectNextElement }) => {
  const [dropdownData, setData] = useState([]);
  const [selected, setSelected] = useState();
  const [number, setNumber] = useState('');
  const [afterFloatNumber, setAfterFloatNumber] = useState(0);
  const [error, setError] = useState('');

  const leftInputRef = useRef();
  const rightInputRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('C4');

      setData(data.map((x) => x.value));

      if (inputValue) {
        const str = inputValue;
        const letters = str.substring(0, str.search(/\d/)); // extracts the letters 'LW'
        const number = parseInt(str.substring(str.search(/\d/), str.indexOf('.')));
        const decimal = parseFloat(str.substring(str.indexOf('.') + 1));

        setNumber(number);
        setAfterFloatNumber(decimal);
        setSelected(letters);
      } else {
        setSelected(data[0].value);
      }
    };

    getData();
  }, []);

  const handleDropdownSelect = (value) => {
    setTimeout(() => {
      leftInputRef.current?.blur();
      leftInputRef.current?.focus();
    }, 100);
    setSelected(value);
  };

  const handleTextChange = async (value) => {
    if (value.length <= 2 && /^[0-9]+$/.test(value)) {
      setNumber(value);
      setFormData((prevState) => {
        return { ...prevState, C4: selected + value + '.' + afterFloatNumber };
      });
      setError('');
    }
  };

  const handleSecondTextChange = async (value) => {
    if (value.length <= 2 && /^[0-9]+$/.test(value)) {
      setAfterFloatNumber(value);
      if (number.length) {
        setFormData((prevState) => {
          return { ...prevState, C4: selected + number + '.' + value };
        });
        setError('');
      } else {
        setError('Please enter a number');
      }
    }
  };

  const handleBlur = () => {
    // Show error if input is empty
    if (number.length === 0) {
      setError('Please enter a number');
    }
  };

  const handleLeftInputSubmit = () => {
    setTimeout(() => {
      rightInputRef.current?.blur();
      rightInputRef.current?.focus();
    }, 100);
  };

  const handleRightInputSubmit = () => {
    if (selected && number) {
      selectNextElement();
    }
  };

  return (
    <View>
      <Dropdown
        label={'C4'}
        data={dropdownData}
        onSelect={handleDropdownSelect}
        selected={selected}
      ></Dropdown>

      <View style={styles.row}>
        <View style={styles.inputWrap}>
          <Input
            ref={leftInputRef}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            value={number}
            placeholder="XX"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleTextChange}
            onBlur={handleBlur}
            errorMessage={error}
            onSubmitEditing={handleLeftInputSubmit}
          />
        </View>

        {/* <View style={styles.dotWrap}>
          <Text style={styles.dot}>.</Text>
        </View> */}

        <View style={styles.inputWrap}>
          <Input
            ref={rightInputRef}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            value={afterFloatNumber}
            placeholder="XX"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleSecondTextChange}
            onSubmitEditing={handleRightInputSubmit}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginVertical: 10,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 1,
  },
});

export default InputC2;
