import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Container({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});