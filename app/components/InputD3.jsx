import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { InteractionManager, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import CellData from '../supabase/cellData';
import Dropdown from './Dropdown';

const InputD3 = ({ setFormData, inputValue, selectNextElement }) => {
  const leftInputRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await CellData.getValues('D3');
      setData(data.map((x) => x.value));
    };

    getData();
    // InteractionManager.runAfterInteractions(() => {
    //   if (leftInputRef?.current) {
    //     leftInputRef.current.focus();
    //   }
    // });

    // const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
    //   // selectNextElement();
    // });

    // return () => {
    //   hideSubscription.remove();
    // };
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
    setDropdownValue(text);
    handleTextChange(`${dropdownValue}${leftValue}-${dropdownValue}${rightValue}`);
  };

  const handleTextChange = (newText) => {
    setFormData((prevState) => {
      return { ...prevState, D3: newText };
    });
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
          autoFocus={true}
        />
        <Text style={styles.dash}>-</Text>
        <TextInput
          style={styles.input}
          value={rightValue}
          onChangeText={handleRightChange}
          keyboardType="numeric"
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
  },
  dash: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
});
