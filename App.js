/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/cenas/CenaPrincipal';
import CenaCliente from './src/cenas/CenaCliente';
import CenaContato from './src/cenas/CenaContato';
import CenaEmpresa from './src/cenas/CenaEmpresa';
import CenaServico from './src/cenas/CenaServico';

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal':
              return <CenaPrincipal navigator={navigator} />;
            case 'cliente':
              return <CenaCliente navigator={navigator} />;
            case 'contato':
              return <CenaContato navigator={navigator} />;
            case 'empresa':
              return <CenaEmpresa navigator={navigator} />;
            case 'servico':
              return <CenaServico navigator={navigator} />;
            default:
              return <CenaPrincipal navigator={navigator} />;
          } 
        }}
      />
    );
  }
}
  
export default App;
