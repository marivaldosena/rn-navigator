/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';

class App extends Component {
  render() {
    return (
      <View>
        <CenaPrincipal />
      </View>      
    );
  }
}
  
export default App;
