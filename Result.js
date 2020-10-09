import React from 'react';
import Container from './Container';
import Button from './Button';
import SpacedText from './SpacedText';
import { ActivityIndicator, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import banana from './assets/warhol-banana.png'
import { actions as bananaActions } from './store/bananas/slice';

export default function Home({ nextState }) {
  const dispatch = useDispatch();
  const { harvesterKnown, harvester, harvesting, error } = useSelector(state => state.bananas);
  const text = harvesterKnown ? `¡Aquí tienes ${harvester}!` : `Lo siento ${harvester} no te conozco`

  function goHome() {
    dispatch(bananaActions.reset())
    nextState();
  }

  if (harvesting) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  return (
    <Container>
      {
        error ? (
          <SpacedText text="No existes" />
        ) : (
          <>
            <SpacedText text={text} />
            { harvesterKnown && <Image source={banana} /> }
          </>
        )
      }
      <Button label="Inicio" onPress={goHome} />
    </Container>
  );
}
