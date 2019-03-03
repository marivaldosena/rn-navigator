import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BarraNavegacao extends Component {
  render() {
    const { barraTitulo, titulo } = estilos;

    return (
      <View style={barraTitulo}>
        <Text style={titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60,
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  }
});

export default BarraNavegacao;
