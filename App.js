/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao';

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar
          hidden
          backgroundColor={'#ccc'}
        />
        <BarraNavegacao />
      </View>      
    );
  }
}
  
export default App;
