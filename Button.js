import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton({ label, ...props }) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: '#188132',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Raleway',
    fontSize: 24,
  }
});