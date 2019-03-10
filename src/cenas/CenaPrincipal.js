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

const CenaPrincipal = ({ navigator }) => {
  const { logo, menu, menuGrupo, imagemMenu } = estilos;

  return (
    <View>
      <StatusBar
        backgroundColor="#ccc"
      />
      
      <BarraNavegacao />
      
      <View style={logo}>
        <Image source={Logo} />
      </View>

      <View style={menu}>
        <View style={menuGrupo}>
          
          <TouchableHighlight
            onPress={() => navigator.push({ id: 'cliente' })}
          >
            <Image style={imagemMenu} source={menuClienteLogo} />
          </TouchableHighlight>
          
          <TouchableHighlight
            onPress={() => alert('contato')}
          >
            <Image style={imagemMenu} source={menuContatoLogo} />
          </TouchableHighlight>
        </View>
        <View style={menuGrupo}>
          <TouchableHighlight
            onPress={() => alert('empresa')}
          >
            <Image style={imagemMenu} source={menuEmpresaLogo} />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => alert('servico')}
          >
            <Image style={imagemMenu} source={menuServicoLogo} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
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
