import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import detalheImage from '../images/detalhe_servico.png';

const CenaServico = ({ navigator }) => {
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
        backgroundColor='#ccc'
      />
      <BarraNavegacao voltar navigator={navigator} />
      
      <View style={cabecalho}>
        <Image source={detalheImage} />
        <Text style={titulo}>Nossos Serviços</Text>
      </View>

      <View style={detalhes}>
        <Text style={texto}>- Consultoria</Text>
        <Text style={texto}>- Processos</Text>
        <Text style={texto}>- Acompanhamento de Projetos</Text>
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
    color: '#19d1c8',
    marginLeft: 10,
    marginTop: 25,
  },
  detalhes: {
    padding: 20,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 20, 
  }
});

export default CenaServico;
