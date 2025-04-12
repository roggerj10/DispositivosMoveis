import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

const time = {
  nome: "Real Madrid",
  escudo: "https://i.pinimg.com/236x/f9/ee/8d/f9ee8d5174e64979663a514fef9570e4.jpg",
};

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant='headlineLarge' style={{ textAlign: 'center' }}>Real Madrid ⚽</Text>

        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Card.Content>
            <Title>{time.nome}</Title>
            <Paragraph>O maior campeão da Europa! Confira o escudo abaixo.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: time.escudo }} />
        </Card>

        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Card.Content>
            <Title>História Gloriosa</Title>
            <Paragraph>
              O Real Madrid é o clube mais vencedor da Liga dos Campeões da UEFA, com inúmeras conquistas nacionais e internacionais. Uma lenda viva do futebol mundial.
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/474x/a5/8d/8a/a58d8ac58f19952652e77ac13ff231bc.jpg' }} />
        </Card>

        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Card.Content>
            <Title>Torcida Mundial</Title>
            <Paragraph>
              Com milhões de fãs espalhados pelo mundo, o Real Madrid possui uma das torcidas mais fiéis e apaixonadas do planeta. Sua influência vai além do esporte.
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://i.pinimg.com/236x/11/ca/3a/11ca3a79c1bec4a58d8e7c48eb04d832.jpg' }} />
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
})
