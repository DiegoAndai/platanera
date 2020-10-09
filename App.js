import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { store, runSagas } from './store';
import Musa from './Musa';

runSagas();

export default function App() {
  const [loaded, setLoaded] = useState(false);

  function loadApp() {
    return Font.loadAsync({
      'Raleway': require('./assets/Raleway-SemiBold.ttf'),
      'Playfair': require('./assets/PlayfairDisplay-Regular.ttf'),
    });
  }

  if (!loaded) {
    return (
      <AppLoading startAsync={loadApp} onFinish={() => setLoaded(true)} autoHideSplash={true} />
    );
  }

  return (
    <Provider store={store}>
      <Musa />
    </Provider>
  );
}
