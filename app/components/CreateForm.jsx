import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import InputA1 from './InputA1';
import InputA2 from './InputA2';
import InputA3 from './InputA3';
import InputA4 from './InputA4';

import InputC1 from './InputC1';
import InputC2 from './InputC2';
import InputC3 from './InputC3';
import InputC4 from './InputC4';

import InputB1 from './InputB1';
import InputB2 from './InputB2';
import InputB3 from './InputB3';
import InputB4 from './InputB4';

import InputD1 from './InputD1';
import InputD2 from './InputD2';
import InputD3 from './InputD3';
import InputD4 from './InputD4';

const CreateForm = ({ selectedElement, setSelectedElement, formData, setFormData }) => {
  const handleElementSelect = (element) => {
    setSelectedElement(element);
  };

  const selectNextElement = () => {
    const [letter, numberStr] = selectedElement.split('');
    const number = Number(numberStr);

    console.log(letter, number);

    if (number < 4) {
      setSelectedElement(`${letter}${number + 1}`);
    } else if (letter === 'A' || letter === 'B' || letter === 'C') {
      const dec = letter.charCodeAt(0);
      if (dec >= 65 && dec <= 67) {
        setSelectedElement(`${String.fromCharCode(dec + 1)}1`);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Schema */}
      <View style={styles.schemaContainer}>
        <View style={styles.schemaRow}>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('A1')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'A1' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['A1'] ? formData['A1'] : 'A1'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('A2')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'A2' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['A2'] ? formData['A2'] : 'A2'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('A3')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'A3' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['A3'] ? formData['A3'] : 'A3'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('A4')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'A4' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['A4'] ? formData['A4'] : 'A4'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.schemaRow}>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('B1')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'B1' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['B1'] ? formData['B1'] : 'B1'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('B2')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'B2' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['B2'] ? formData['B2'] : 'B2'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('B3')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'B3' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['B3'] ? formData['B3'] : 'B3'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('B4')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'B4' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['B4'] ? formData['B4'] : 'B4'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.schemaRow}>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('C1')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'C1' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['C1'] ? formData['C1'] : 'C1'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('C2')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'C2' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['C2'] ? formData['C2'] : 'C2'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('C3')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'C3' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['C3'] ? formData['C3'] : 'C3'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('C4')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'C4' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['C4'] ? formData['C4'] : 'C4'}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.schemaRow}>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('D1')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'D1' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['D1'] ? formData['D1'] : 'D1'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('D2')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'D2' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>
                {formData['D2'] ? formData['D2'].split('-').join('') : 'D2'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('D3')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'D3' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>{formData['D3'] ? formData['D3'] : 'D3'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('D4')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'D4' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>
                {formData['D4'] ? formData['D4'].split('-').join('') : 'D4'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {selectedElement === 'A1' && (
          <InputA1
            setFormData={setFormData}
            inputValue={formData['A1']}
            selectNextElement={selectNextElement}
          ></InputA1>
        )}
        {selectedElement === 'A2' && (
          <InputA2
            setFormData={setFormData}
            inputValue={formData['A2']}
            selectNextElement={selectNextElement}
          ></InputA2>
        )}
        {selectedElement === 'A3' && (
          <InputA3
            setFormData={setFormData}
            inputValue={formData['A3']}
            selectNextElement={selectNextElement}
          ></InputA3>
        )}
        {selectedElement === 'A4' && (
          <InputA4
            setFormData={setFormData}
            inputValue={formData['A4']}
            selectNextElement={selectNextElement}
          ></InputA4>
        )}
        {selectedElement === 'B1' && (
          <InputB1
            setFormData={setFormData}
            inputValue={formData['B1']}
            selectNextElement={selectNextElement}
          ></InputB1>
        )}
        {selectedElement === 'B2' && (
          <InputB2
            setFormData={setFormData}
            inputValue={formData['B2']}
            selectNextElement={selectNextElement}
          ></InputB2>
        )}
        {selectedElement === 'B3' && (
          <InputB3
            setFormData={setFormData}
            inputValue={formData['B3']}
            selectNextElement={selectNextElement}
          ></InputB3>
        )}
        {selectedElement === 'B4' && (
          <InputB4
            setFormData={setFormData}
            inputValue={formData['B4']}
            selectNextElement={selectNextElement}
          ></InputB4>
        )}
        {selectedElement === 'C1' && (
          <InputC1
            setFormData={setFormData}
            inputValue={formData['C1']}
            selectNextElement={selectNextElement}
          ></InputC1>
        )}
        {selectedElement === 'C2' && (
          <InputC2
            setFormData={setFormData}
            inputValue={formData['C2']}
            selectNextElement={selectNextElement}
          ></InputC2>
        )}
        {selectedElement === 'C3' && (
          <InputC3
            setFormData={setFormData}
            inputValue={formData['C3']}
            selectNextElement={selectNextElement}
          ></InputC3>
        )}
        {selectedElement === 'C4' && (
          <InputC4
            setFormData={setFormData}
            inputValue={formData['C4']}
            selectNextElement={selectNextElement}
          ></InputC4>
        )}
        {selectedElement === 'D1' && (
          <InputD1
            setFormData={setFormData}
            inputValue={formData['D1']}
            selectNextElement={selectNextElement}
          ></InputD1>
        )}
        {selectedElement === 'D2' && (
          <InputD2
            setFormData={setFormData}
            inputValue={formData['D2']}
            selectNextElement={selectNextElement}
          ></InputD2>
        )}
        {selectedElement === 'D3' && (
          <InputD3
            setFormData={setFormData}
            inputValue={formData['D3']}
            selectNextElement={selectNextElement}
          ></InputD3>
        )}
        {selectedElement === 'D4' && (
          <InputD4
            setFormData={setFormData}
            inputValue={formData['D4']}
            selectNextElement={selectNextElement}
          ></InputD4>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e262e',
    padding: 20,
  },
  schemaContainer: {
    marginBottom: 20,
  },
  schemaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  schemaElement: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    width: '23%',
    alignItems: 'center',
  },
  selectedSchemaElement: {
    backgroundColor: '#6a8af6',
    borderColor: '#6a8af6',
  },
  schemaElementText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    width: '100%',
  },
});
export default CreateForm;
