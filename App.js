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

import CenaPrincipal from './src/cenas/CenaPrincipal';
import CenaCliente from './src/cenas/CenaCliente';

class App extends Component {
  render() {
    return (
      <View>
        <CenaCliente />
      </View>      
    );
  }
}
  
export default App;
