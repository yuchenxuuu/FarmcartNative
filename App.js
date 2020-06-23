/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

enableScreens();

import MainNavigator from './src/navigation/MainNavigator';

// APP
function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  );
}

export default App;
