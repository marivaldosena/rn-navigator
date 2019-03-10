import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import btnVoltarImage from '../images/btn_voltar.png';

const BarraNavegacao = ({ voltar, navigator, corDeFundo }) => {
  const { barraTitulo, titulo } = estilos;
  if (voltar) {
    return (
      <View style={[barraTitulo, { backgroundColor: corDeFundo }]}>
        <TouchableHighlight
          onPress={() => navigator.pop()}
        >
          <Image source={btnVoltarImage} />
        </TouchableHighlight>
        
        <Text style={titulo}>ATM Consultoria</Text>
      </View>
    );
  }
    return (
      <View style={[barraTitulo, { backgroundColor: corDeFundo }]}>
        <Text style={titulo}>ATM Consultoria</Text>
      </View>
    );
};

const estilos = StyleSheet.create({
  barraTitulo: {
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
