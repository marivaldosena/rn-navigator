import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from '../components/BarraNavegacao';
import Logo from '../images/logo.png';
import menuClienteLogo from '../images/menu_cliente.png';
import menuContatoLogo from '../images/menu_contato.png';
import menuEmpresaLogo from '../images/menu_empresa.png';
import menuServicoLogo from '../images/menu_servico.png';

const corDeFundo = '#ccc';

const CenaPrincipal = ({ navigator }) => {
  const {
    container,
    logo,
    menu,
    menuGrupo,
    imagemMenu
  } = estilos;

  return (
    <View style={container}>
      <StatusBar
        backgroundColor={corDeFundo}
      />
      
      <BarraNavegacao
        corDeFundo={corDeFundo}
      />
      
      <View style={logo}>
        <Image source={Logo} />
      </View>

      <View style={menu}>
        <View style={menuGrupo}>
          
          <TouchableHighlight
            underlayColor={'#b9c941'}
            activeOpacity={0.3}
            onPress={() => navigator.push({ id: 'cliente' })}
          >
            <Image style={imagemMenu} source={menuClienteLogo} />
          </TouchableHighlight>
          
          <TouchableHighlight
            underlayColor={'#61bd8c'}
            activeOpacity={0.3}
            onPress={() => navigator.push({ id: 'contato' })}
          >
            <Image style={imagemMenu} source={menuContatoLogo} />
          </TouchableHighlight>
        </View>
        <View style={menuGrupo}>
          <TouchableHighlight
            underlayColor={'#ec7148'}
            activeOpacity={0.3}
            onPress={() => navigator.push({ id: 'empresa' })}
          >
            <Image style={imagemMenu} source={menuEmpresaLogo} />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor={'#19d1c8'}
            activeOpacity={0.3}
            onPress={() => navigator.push({ id: 'servico' })}
          >
            <Image style={imagemMenu} source={menuServicoLogo} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 30,
    alignItems: 'center',
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row',
  },
  imagemMenu: {
    margin: 15,
  }
});

export default CenaPrincipal;
