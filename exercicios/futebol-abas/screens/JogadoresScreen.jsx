import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

// Lista de jogadores
const jogadores = [
  {
    nome: "Vinícius Júnior",
    numero: 7,
    imagem: "https://i.pinimg.com/736x/07/6c/07/076c0720747e790beb773a0c738c514f.jpg",
  },
  {
    nome: "Jude Bellingham",
    numero: 5,
    imagem: "https://i.pinimg.com/474x/2c/71/39/2c7139ad78c1ded7200f31036bc7c7be.jpg",
  },
  {
    nome: "Rodrygo",
    numero: 11,
    imagem: "https://i.pinimg.com/474x/4a/f6/ac/4af6acd148e0a03c55f883fbb53e9eb1.jpg",
  },
  {
    nome: "Eduardo Camavinga",
    numero: 12,
    imagem: "https://i.pinimg.com/474x/ad/b9/67/adb967d16596e2a6179ca5344215d44b.jpg",
  },
  {
    nome: "Kylian Mbappé",
    numero: 9,
    imagem: "https://i.pinimg.com/474x/8c/78/fd/8c78fdeda42f75009ebdc924c559ff1a.jpg",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant='headlineLarge' style={{ textAlign: 'center', marginBottom: 20 }}>
          Jogadores do Real Madrid 2024–2025 👤
        </Text>

        {jogadores.map((jogador, index) => (
          <Card style={styles.card} key={index}>
            <Card.Cover source={{ uri: jogador.imagem }} />
            <Card.Content>
              <Title>{jogador.nome}</Title>
              <Paragraph>Número: {jogador.numero}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  card: {
    width: '90%',
    marginBottom: 20,
  },
});
