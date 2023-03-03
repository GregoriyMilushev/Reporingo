import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { InteractionManager, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';

const InputB4 = ({ setFormData, inputValue, selectNextElement }) => {
  const leftInputRef = useRef();

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (leftInputRef?.current) {
        leftInputRef.current.focus();
      }
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      // selectNextElement();
    });

    return () => {
      hideSubscription.remove();
    };
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

  return (
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
      <Text style={styles.dash}>-</Text>
      <TextInput
        style={styles.input}
        value={rightValue}
        onChangeText={handleRightChange}
        keyboardType="numeric"
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
  },
  dash: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
});
