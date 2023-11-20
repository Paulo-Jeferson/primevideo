import { View, Image, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';

import { styles } from './styles';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';
import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';

import { FilmesCard } from '../../components/FilmesCard';

import { FILMESASSISTINDO } from '../../utils/moviesWatching';
import { FILMESRECOMENDADOS } from '../../utils/moviesWatch';
import { FILMESORIGINAIS } from '../../utils/moviesCrimes';

export const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={PrimeVideoLogo} style={styles.primeLogoImg} />

        <Image source={AmazonLogo} style={styles.amazonLogoImg} />
      </View>

      <View style={styles.categoria}>
        <TouchableOpacity >
          <Text style={styles.categoriaTexto}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoriaTexto}>Filmes</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoriaTexto}>Séries</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoriaTexto}>Esportes</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentFilmes}>
        <TouchableOpacity style={styles.filmeImagemThumb}>
          <Image source={MovieTheWhell} style={styles.filmeImagem} />
        </TouchableOpacity>

        <Text style={[styles.filmeTexto, { paddingLeft: 15 }]}>Continue assistindo</Text>

        <FlatList
          data={FILMESASSISTINDO}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FilmesCard filmeURL={item.filmesURL} />
          )}
          horizontal
          contentContainerStyle={styles.contentLista}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.filmeTextoAzul}>Prime</Text>
          <Text style={styles.filmeTexto}> Filmes recomendados</Text>
        </View>

        <FlatList
          data={FILMESORIGINAIS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FilmesCard filmeURL={item.filmesURL} />
          )}
          horizontal
          contentContainerStyle={styles.contentLista}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.filmeTextoAzul}>Prime</Text>
          <Text style={styles.filmeTexto}> Originais e exclusivos</Text>
        </View>

        <FlatList
          data={FILMESRECOMENDADOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FilmesCard filmeURL={item.filmesURL} />
          )}
          horizontal
          contentContainerStyle={styles.contentLista}
        />

      </ScrollView>
    </View>

  );
};