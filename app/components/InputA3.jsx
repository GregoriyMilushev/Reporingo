import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { Input } from 'react-native-elements';

const InputA3 = ({ setFormData, inputValue, selectNextElement }) => {
  useEffect(() => {
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      selectNextElement();
    });

    return () => {
      hideSubscription.remove();
    };
  }, []);

  const handleTextChange = (newText) => {
    setFormData((prevState) => {
      return { ...prevState, A3: newText };
    });
  };

  return (
    <Input placeholder="Type something..." onChangeText={handleTextChange} value={inputValue} />
  );
};

export default InputA3;
