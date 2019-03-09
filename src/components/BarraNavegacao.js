import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import btnVoltarImage from '../images/btn_voltar.png';

const BarraNavegacao = ({ voltar }) => {
  const { barraTitulo, titulo } = estilos;
  if (voltar) {
    return (
      <View style={barraTitulo}>
        <Image source={btnVoltarImage} />
        <Text style={titulo}>ATM Consultoria</Text>
      </View>
    );
  }
    return (
      <View style={barraTitulo}>
        <Text style={titulo}>ATM Consultoria</Text>
      </View>
    );
};

const estilos = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60,
    flexDirection: 'row',
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  }
});

export default BarraNavegacao;
