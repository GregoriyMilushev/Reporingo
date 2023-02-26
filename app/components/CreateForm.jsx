import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import InputA1 from './InputA1';
import InputA2 from './InputA2';
import InputA3 from './InputA3';
import InputA4 from './InputA4';
import InputB1 from './InputB1';

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
              <Text style={styles.schemaElementText}>B2</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('B3')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'B3' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>B3</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('B4')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'B4' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>B4</Text>
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
              <Text style={styles.schemaElementText}>C1</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('C2')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'C2' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>C2</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('C3')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'C3' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>C3</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('C4')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'C4' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>C4</Text>
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
              <Text style={styles.schemaElementText}>D1</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('D2')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'D2' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>D2</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('D3')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'D3' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>D3</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('D4')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'D4' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>D4</Text>
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
