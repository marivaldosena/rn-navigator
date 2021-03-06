import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native';

import BarraNavegacao from '../components/BarraNavegacao';

import detalheImage from '../images/detalhe_cliente.png';
import cliente1 from '../images/cliente1.png';
import cliente2 from '../images/cliente2.png';

const corDeFundo = '#b9c941';

const CenaCliente = ({ navigator }) => {
  const {
    container, 
    cabecalho,
    titulo,
    detalhes,
    texto
  } = estilos;

  return (
    <View style={container}>
      <StatusBar
        backgroundColor={corDeFundo}
      />
      <BarraNavegacao
        voltar
        navigator={navigator}
        corDeFundo={corDeFundo}
      />
      
      <View style={cabecalho}>
        <Image source={detalheImage} />
        <Text style={titulo}>Nossos Clientes</Text>
      </View>

      <View style={detalhes}>
        <Image source={cliente1} />
        <Text style={texto}>Lorem ipsum dolor sit amet</Text>
      </View>

      <View style={detalhes}>
        <Image source={cliente2} />
        <Text style={texto}>Teste</Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
  },
  titulo: {
    fontSize: 30,
    color: corDeFundo,
    marginLeft: 10,
    marginTop: 25,
  },
  detalhes: {
    padding: 20,
    marginTop: 10,
  },
  texto: {
    fontSize: 18,
    marginLeft: 20,
  }
});

export default CenaCliente;
