import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputA3 = ({ setFormData, inputValue, selectNextElement }) => {
  const leftInputRef = useRef();
  const rightInputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      leftInputRef.current?.blur();
      leftInputRef.current?.focus();
    }, 100);
  }, []);

  const [leftValue, setLeftValue] = useState(inputValue ? inputValue.split('-')[0] : 0);
  const [rightValue, setRightValue] = useState(inputValue ? inputValue.split('-')[1] : 0);

  const handleLeftChange = (text) => {
    setLeftValue(text);
    handleTextChange(`${text}-${rightValue}`);
  };

  const handleRightChange = (text) => {
    setRightValue(text);
    handleTextChange(`${leftValue}-${text}`);
  };

  const handleTextChange = (newText) => {
    setFormData((prevState) => {
      return { ...prevState, A3: newText };
    });
  };

  const handleLeftSubmit = () => {
    rightInputRef.current.focus();
  };

  const handleRightSubmit = () => {
    if (leftValue) {
      selectNextElement();
    }
  };

  return (
    <View keyboardShouldPersistTaps="always" style={styles.container}>
      <TextInput
        ref={leftInputRef}
        style={styles.input}
        value={leftValue}
        onChangeText={handleLeftChange}
        keyboardType="numeric"
        autoFocus={true}
        onSubmitEditing={handleLeftSubmit}
      />
      <Text style={styles.dash}>-</Text>
      <TextInput
        ref={rightInputRef}
        style={styles.input}
        value={rightValue}
        onChangeText={handleRightChange}
        keyboardType="numeric"
        onSubmitEditing={handleRightSubmit}
      />
    </View>
  );
};

export default InputA3;

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
