import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

// Lista de títulos
const titulos = [
  {
    nome: "Liga dos Campeões da UEFA",
    anos: [1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, 2024],
    imagem: "https://i.pinimg.com/736x/3a/ea/25/3aea259cc24350a84294eed48dbbd6b1.jpg",
  },
  {
    nome: "Mundial de Clubes da FIFA",
    anos: [2014, 2016, 2017, 2018, 2022],
    imagem: "https://i.pinimg.com/236x/57/17/8c/57178c61059355df4b9fae1701a686bb.jpg",
  },
  {
    nome: "La Liga",
    anos: [1932, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 1967, 1968, 1969, 1972, 1975, 1976, 1978, 1979, 1980, 1986, 1987, 1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007, 2008, 2012, 2017, 2020, 2022, 2024],
    imagem: "https://i.pinimg.com/236x/fe/d3/c5/fed3c57707328b3161541e2e655c3df6.jpg",
  },
  {
    nome: "Copa do Rei",
    anos: [1905, 1906, 1907, 1908, 1917, 1934, 1936, 1946, 1947, 1962, 1970, 1974, 1975, 1980, 1982, 1989, 1993, 2011, 2014, 2023],
    imagem: "https://i.pinimg.com/236x/3d/10/30/3d1030144a4e77e02b691b2419a5d61a.jpg",
  },
  {
    nome: "Supercopa da UEFA",
    anos: [2002, 2014, 2016, 2017, 2022],
    imagem: "https://i.pinimg.com/736x/ce/5b/a6/ce5ba645a0dbf5396a6ffc7670c30f1d.jpg",
  },
  {
    nome: "Supercopa da Espanha",
    anos: [1988, 1989, 1990, 1993, 1997, 2001, 2003, 2008, 2012, 2017, 2019, 2020, 2021, 2023],
    imagem: "https://i.pinimg.com/236x/7d/77/21/7d77211cd4ac4a4e871c1886ee81d7d5.jpg",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={{ textAlign: 'center', marginBottom: 20 }}>
          Títulos do Real Madrid 🏆
        </Text>
        {/* Lista de títulos com imagem */}
        {titulos.map((titulo, index) => (
          <Card style={styles.card} key={index}>
            <Card.Cover source={{ uri: titulo.imagem }} />
            <Card.Content>
              <Title>{titulo.nome}</Title>
              <Paragraph>Anos: {titulo.anos.join(', ')}</Paragraph>
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
