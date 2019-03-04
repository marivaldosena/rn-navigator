import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet
} from 'react-native';

import BarraNavegacao from '../components/BarraNavegacao';
import Logo from '../images/logo.png';
import menuClienteLogo from '../images/menu_cliente.png';
import menuContatoLogo from '../images/menu_contato.png';
import menuEmpresaLogo from '../images/menu_empresa.png';
import menuServicoLogo from '../images/menu_servico.png';

const CenaPrincipal = () => {
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
          <Image style={imagemMenu} source={menuClienteLogo} />
          <Image style={imagemMenu} source={menuContatoLogo} />
        </View>
        <View style={menuGrupo}>
          <Image style={imagemMenu} source={menuEmpresaLogo} />
          <Image style={imagemMenu} source={menuServicoLogo} />
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
