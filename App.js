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
import CenaClientes from './src/cenas/CenaCliente';

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal':
              return (<CenaPrincipal
                navigator={navigator}
              />);
            case 'cliente':
              return (
                <CenaClientes
                  navigator={navigator}
                />  
              );
            case 'empresa':
              break;
            case 'servico':
              break;
            default:
          } 
        }}
      />
    );
  }
}
  
export default App;
