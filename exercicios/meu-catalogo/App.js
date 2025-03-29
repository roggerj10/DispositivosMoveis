import React from 'react';
import { FlatList, Image, Text, View, StyleSheet, SafeAreaView } from 'react-native';

const listaFilmes = [
  {
    nome: "À Procura da Felicidade",
    ano: 2006,
    diretor: "Gabriele Muccino",
    tipo: "Drama",
    capa: "https://i.pinimg.com/736x/3a/bd/c9/3abdc9bbd26cbf7af6154daed6215366.jpg"
  },
  {
    nome: "Vingadores: Ultimato",
    ano: 2019,
    diretor: "Joe Russo",
    tipo: "Ação",
    capa: "https://i.pinimg.com/736x/ad/1e/f7/ad1ef7c6c2400e8c340df3b76ad1e18b.jpg"
  },
  {
    nome: "O Poderoso Chefão",
    ano: 1972,
    diretor: "Francis Ford Coppola",
    tipo: "Crime/Drama",
    capa: "https://i.pinimg.com/736x/48/9c/5a/489c5a5e102c89d21d20912ce81233d3.jpg"
  },
  {
    nome: "O Rei Leão",
    ano: 1994,
    diretor: "Roger Allers, Rob Minkoff",
    tipo: "Animação/Aventura",
    capa: "https://i.pinimg.com/736x/bf/6c/ad/bf6cad1e8fcc83cbe4544a84f39ee458.jpg"
  },
  {
    nome: "Interstellar",
    ano: 2014,
    diretor: "Christopher Nolan",
    tipo: "Ficção Científica/Drama",
    capa: "https://i.pinimg.com/736x/f0/0e/f4/f00ef4ef28062a3ffe32c80cfa039c86.jpg"
  },
  {
    nome: "O Exorcista",
    ano: 1973,
    diretor: "William Friedkin",
    tipo: "Terror",
    capa: "https://i.pinimg.com/736x/37/13/b2/3713b24819e32722e6defedbfec60c07.jpg"
  }
];

const listaSeries = [
  {
    nome: "Breaking Bad",
    ano: 2008,
    diretor: "Vince Gilligan",
    temporadas: 5,
    capa: "https://i.pinimg.com/736x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg"
  },
  {
    nome: "Stranger Things",
    ano: 2016,
    diretor: "The Duffer Brothers",
    temporadas: 4,
    capa: "https://i.pinimg.com/736x/91/17/75/9117751636528b25a7b4687cab63572d.jpg"
  },
  {
    nome: "Game of Thrones",
    ano: 2011,
    diretor: "David Benioff, D.B. Weiss",
    temporadas: 8,
    capa: "https://i.pinimg.com/736x/29/50/d3/2950d35edaf94a68825431d1335ea06d.jpg"
  },
  {
    nome: "The Crown",
    ano: 2016,
    diretor: "Peter Morgan",
    temporadas: 6,
    capa: "https://i.pinimg.com/736x/10/fb/be/10fbbe0bf276b7b74f1c9a1cc84ee92e.jpg"
  },
  {
    nome: "Friends",
    ano: 1994,
    diretor: "David Crane, Marta Kauffman",
    temporadas: 10,
    capa: "https://i.pinimg.com/736x/6f/e1/15/6fe115dc42d7798eaa409b8fe3c124f7.jpg"
  },
  {
    nome: "The Mandalorian",
    ano: 2019,
    diretor: "Jon Favreau",
    temporadas: 3,
    capa: "https://i.pinimg.com/736x/49/7b/8b/497b8bdd152ea05fce5654a0b8c799f7.jpg"
  }
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.capa }} style={styles.image} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.info}>Ano: {item.ano}</Text>
      <Text style={styles.info}>Diretor: {item.diretor}</Text>
      {item.temporadas && <Text style={styles.info}>Temporadas: {item.temporadas}</Text>}
      <Text style={styles.info}>Gênero: {item.tipo || "N/A"}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Filmes e Séries</Text>
      <FlatList
        data={[...listaFilmes, ...listaSeries]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FF6F61',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#2C2C2C',
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#444',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#444',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: '#B5B5B5',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default App;
