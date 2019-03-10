import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image
} from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import detalheImage from '../images/detalhe_contato.png';

const corDeFundo = '#61bd8c';

const CenaContato = ({ navigator }) => {
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
        <Text style={titulo}>Contatos</Text>
      </View>

      <View style={detalhes}>
        <Text style={texto}>Tel: (11) 1234-1234</Text>
        <Text style={texto}>Cel: (11) 98765-4321</Text>
        <Text style={texto}>Email: contato@email.com</Text>
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
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
    paddingLeft: 10
  },
});

export default CenaContato;
