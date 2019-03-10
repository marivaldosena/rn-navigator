import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import detalheImage from '../images/detalhe_empresa.png';

const CenaEmpresa = ({ navigator }) => {
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
        <Image source={detalheImage} />
        <Text style={titulo}>A Empresa</Text>
      </View>

      <View style={detalhes}>
        <Text style={texto}>
          A ATM Consultoria está no mercado a mais de 20 anos...
        </Text>
        <Text style={texto}>
          Quisque ultricies tempus rhoncus. Praesent condimentum,
          lacus nec auctor aliquet, risus elit sollicitudin enim,
          eu elementum nulla nunc et turpis.
          In ut turpis id diam cursus pellentesque quis vitae neque.
          Morbi sed velit id metus finibus sodales.
          Fusce dictum dui sit amet erat tempus, nec sagittis diam consequat.
          Cras pharetra pharetra massa non pellentesque. 
        </Text>
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
    color: '#ec7148',
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

export default CenaEmpresa;
