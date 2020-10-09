import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from './Container';
import Button from './Button';
import SpacedText from './SpacedText';
import { TextInput, StyleSheet } from 'react-native';

import { actions as bananasActions } from './store/bananas/slice';

export default function Home({ nextState }) {
  const dispatch = useDispatch();
  const [harvester, setHarvester] = useState('');

  function harvest() {
    dispatch(bananasActions.harvestBanana({ harvester }));
    nextState();
  }

  return (
    <Container>
      <SpacedText text="¿Cómo te llamas?" />
      <TextInput style={styles.input} value={harvester} onChangeText={setHarvester}/>
      <Button label="Confirmar" onPress={harvest} />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    backgroundColor: '#F1F1F1',
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
    fontFamily: 'Playfair'
  }
});
