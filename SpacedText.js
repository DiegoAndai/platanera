import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function SpacedText({ text }) {
  return (
    <Text style={styles.text}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontFamily: 'Playfair',
    fontSize: 16,
    marginBottom: 20,
    width: '90%',
    textAlign: 'center',
  }
});