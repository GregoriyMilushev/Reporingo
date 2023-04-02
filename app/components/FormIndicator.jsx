import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormIndicator = ({ number }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <View style={[styles.square, n === number && styles.highlight]} key={n}>
          <Text style={[styles.text, n === number && { color: '#fff' }]}>{n}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 3,
  },
  square: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    backgroundColor: '#82c773',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FormIndicator;
