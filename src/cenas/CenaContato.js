import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image
} from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import detalheContatoImage from '../images/detalhe_contato.png';

const CenaContato = ({ navigator }) => {
  const {
    cabecalho,
    titulo,
    detalhes,
    texto
  } = estilos;

  return (
    <View>
      <StatusBar
        backgroundColor='#ccc'
      />
      <BarraNavegacao voltar navigator={navigator} />
      
      <View style={cabecalho}>
        <Image source={detalheContatoImage} />
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
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
  },
  titulo: {
    fontSize: 30,
    color: '#61bd8c',
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
