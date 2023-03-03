import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import InputA1 from './InputA1';
import InputC1 from './InputC1';
import InputC2 from './InputC2';
import InputC3 from './InputC3';
import InputC4 from './InputC4';

const CreateForm = ({ selectedElement, setSelectedElement, formData, setFormData }) => {
  const handleElementSelect = (element) => {
    setSelectedElement(element);
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
              <Text style={styles.schemaElementText}>A2</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('A3')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'A3' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>A3</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleElementSelect('A4')}>
            <View
              style={[
                styles.schemaElement,
                selectedElement === 'A4' && styles.selectedSchemaElement,
              ]}
            >
              <Text style={styles.schemaElementText}>A4</Text>
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
              <Text style={styles.schemaElementText}>B1</Text>
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
          <InputA1 setFormData={setFormData} inputValue={formData['A1']}></InputA1>
        )}
        {selectedElement === 'C1' && (
          <InputC1 setFormData={setFormData} inputValue={formData['C1']}></InputC1>
        )}
        {selectedElement === 'C2' && (
          <InputC2 setFormData={setFormData} inputValue={formData['C2']}></InputC2>
        )}
        {selectedElement === 'C3' && (
          <InputC3 setFormData={setFormData} inputValue={formData['C3']}></InputC3>
        )}
        {selectedElement === 'C4' && (
          <InputC4 setFormData={setFormData} inputValue={formData['C4']}></InputC4>
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
