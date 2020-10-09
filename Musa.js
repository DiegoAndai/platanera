import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

import logo from './assets/splash.png'; 

import Home from './Home';
import Harvest from './Harvest';
import Result from './Result';

const states = {
  0: Home,
  1: Harvest,
  2: Result,
}

export default function Musa() {
  const [state, setState] = useState(0);
  const ActualComponent = states[state] || Home;

  function nextState() {
    if (state >= 2) {
      setState(0);
    } else {
      setState(state + 1);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.image}>
        <View style={styles.content}>
          <ActualComponent nextState={nextState}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    flex: 1,
    marginBottom: 50,
    flexDirection: "column-reverse",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
