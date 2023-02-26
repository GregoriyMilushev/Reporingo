import React, { useState } from 'react';
import { Input } from 'react-native-elements';

const InputA3 = ({ setFormData, inputValue, selectNextElement }) => {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return <Input placeholder="Type something..." onChangeText={handleTextChange} value={text} />;
};

export default InputA3;
