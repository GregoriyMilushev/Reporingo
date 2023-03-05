import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputB4 = ({ setFormData, inputValue, selectNextElement }) => {
  const leftInputRef = useRef();
  const midInputRef = useRef();
  const rightInputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      leftInputRef.current?.blur();
      leftInputRef.current?.focus();
    }, 100);
  }, []);

  const [leftValue, setLeftValue] = useState(inputValue ? inputValue.split('-')[0] : 0);
  const [midValue, setMidValue] = useState(inputValue ? inputValue.split('-')[1].split('+')[0] : 0);
  const [rightValue, setRightValue] = useState(
    inputValue ? inputValue.split('-')[1].split('+')[1] : 0
  );

  const handleLeftChange = (text) => {
    setLeftValue(text);
    handleTextChange(`${text}-${midValue}+${rightValue}`);
  };

  const handleMidChange = (text) => {
    setMidValue(text);
    handleTextChange(`${leftValue}-${text}+${rightValue}`);
  };

  const handleRightChange = (text) => {
    setRightValue(text);
    handleTextChange(`${leftValue}-${midValue}+${text}`);
  };

  const handleTextChange = (newText) => {
    setFormData((prevState) => {
      return { ...prevState, B4: newText };
    });
  };

  const handleLeftSubmit = () => {
    setTimeout(() => {
      midInputRef.current?.blur();
      midInputRef.current?.focus();
    }, 100);
  };

  const handleMidSubmit = () => {
    setTimeout(() => {
      rightInputRef.current?.blur();
      rightInputRef.current?.focus();
    }, 100);
  };

  const handleRightSubmit = () => {
    if (leftValue && midValue) {
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
        maxLength={2}
        onSubmitEditing={handleLeftSubmit}
      />
      <Text style={styles.dash}>-</Text>
      <TextInput
        ref={midInputRef}
        style={styles.input}
        value={midValue}
        onChangeText={handleMidChange}
        keyboardType="numeric"
        maxLength={3}
        onSubmitEditing={handleMidSubmit}
      />
      <Text style={styles.dash}>+</Text>
      <TextInput
        ref={rightInputRef}
        style={styles.input}
        value={rightValue}
        onChangeText={handleRightChange}
        keyboardType="numeric"
        maxLength={2}
        onSubmitEditing={handleRightSubmit}
      />
    </View>
  );
};

export default InputB4;

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
