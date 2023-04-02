import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FormFirstStep from './FormFirstStep';
import FormFourthStep from './FormFourthStep';
import FormIndicator from './FormIndicator';
import FormSecondStep from './FormSecondStep';
import FormThirdStep from './FormThirdStep';

const MultiStepForm = () => {
  const [currentFormStep, setCurrentFormStep] = useState(1);

  const handleExit = () => {
    // TODO: Handle exit button press
  };

  const handleBack = () => {
    setCurrentFormStep((oldState) => oldState - 1);
  };

  const handleNext = () => {
    setCurrentFormStep((oldState) => oldState + 1);
  };

  const handleSumbit = () => {};

  return (
    <View style={styles.container}>
      <FormIndicator number={currentFormStep}></FormIndicator>
      {currentFormStep === 1 ? <FormFirstStep></FormFirstStep> : ''}
      {currentFormStep === 2 ? <FormSecondStep></FormSecondStep> : ''}
      {currentFormStep === 3 ? <FormThirdStep></FormThirdStep> : ''}
      {currentFormStep === 4 ? <FormFourthStep></FormFourthStep> : ''}
      <View style={styles.buttonContainer}>
        {currentFormStep === 1 ? (
          <TouchableOpacity style={[styles.button, styles.exitButton]} onPress={handleExit}>
            <Text style={styles.buttonText}>Exit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MultiStepForm;

const styles = StyleSheet.create({
  container: {
    paddingStart: 30,
    paddingEnd: 30,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nextButton: {
    backgroundColor: '#82c773',
  },
  exitButton: {
    backgroundColor: '#ff6961',
  },
  backButton: {
    backgroundColor: '#964B00',
  },
});
