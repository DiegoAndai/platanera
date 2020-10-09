import React from 'react';
import { useSelector } from 'react-redux';
import Container from './Container';
import Button from './Button';
import SpacedText from './SpacedText';

export default function Home({ nextState }) {
  const bananaCount = useSelector(state => state.bananas.count);
  const text = bananaCount ? `Tienes ${bananaCount} ${bananaCount == 1 ? 'plátano' : 'plátanos'}` : 'Aún no tienes plátanos'

  return (
    <Container>
      <SpacedText text={text} />
      <Button label="Cosechar" onPress={nextState} />
    </Container>
  );
}
