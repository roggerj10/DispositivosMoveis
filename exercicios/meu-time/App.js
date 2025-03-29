import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  function alerta(){
    alert("Gooool do Neymar")
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontStyle: 'italic' }}>Neymar JR.</Text>
      <StatusBar />
      <Image
      source={{
        uri:"https://i.pinimg.com/474x/2d/3b/c9/2d3bc95c413e2e34b7012488e793da03.jpg"
      }}
      style={{
        height:200,
        width:200
      }}
      />
     <Text style={styles.info}>
          Nome completo: Neymar da Silva Santos Júnior{"\n"}
        </Text>
      <Image
      source={{
        uri:"https://i.pinimg.com/236x/78/4c/3f/784c3f6fbc3ae7b5deb6afcfefa75afd.jpg"
      }}
      style={{
        height:200,
        width:200
      }}
      />
       <Text style={styles.info}>Data de nascimento: 5 de fevereiro de 1992 {"\n"}</Text>
      <Image
      source={{
        uri:"https://i.pinimg.com/474x/4e/b3/65/4eb365de3b861f5be44fc89a5c651577.jpg"
      }}
      style={{
        height:200,
        width:200
      }}
      />
      <Text style={styles.info}>Nacionalidade: Brasileiro{"\n"}</Text>
      <Image
      source={{
        uri:"https://i.pinimg.com/236x/59/1a/40/591a40b22dbe7aba1ccf55c48f0627a4.jpg"
      }}
      style={{
        height:200,
        width:200
      }}
      />
      <Text style={styles.info}>Clube: Santos Futebol Clube{"\n"}</Text>
      <Image
      source={{
        uri:"https://i.pinimg.com/474x/09/5b/91/095b9171d6fa9d5934a601ebe71c8320.jpg"
      }}
      style={{
        height:200,
        width:200
      }}
      />
      <Text style={styles.info}>Posição: Atacante{"\n"}</Text>
      <Button title='Gol' onPress={alerta}></Button>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
