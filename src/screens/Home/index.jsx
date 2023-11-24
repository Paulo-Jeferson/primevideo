import { View, Image, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';

import { styles } from './styles';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';
import MovieTheWhell from '../../../assets/movies/the_wheel_of_time.png';

import { FilmesCard } from '../../components/FilmesCard';

import { FILMESASSISTINDO } from '../../utils/moviesWatching';
import { FILMESRECOMENDADOS } from '../../utils/moviesWatch';
import { FILMESORIGINAIS } from '../../utils/moviesCrimes';

export const Home = ({ navigation }) => {

  const handleImagePress = () => {
    navigation.navigate('Comentario');
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={PrimeVideoLogo} style={styles.primeLogoImg} />

        <Image source={AmazonLogo} style={styles.amazonLogoImg} />
      </View>

      <View style={styles.categoria}>
        <TouchableOpacity>
          <Text style={{ ...styles.categoriaTexto, color: '#fff' }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ ...styles.categoriaTexto, color: 'gray' }}>TV Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ ...styles.categoriaTexto, color: 'gray' }}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ ...styles.categoriaTexto, color: 'gray' }}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentLista}>
        <TouchableOpacity style={styles.filmeImagemThumb} onPress={handleImagePress}>
          <Image source={MovieTheWhell} style={styles.filmeImagem} />
        </TouchableOpacity>

        <Text style={[styles.filmeTexto, { paddingLeft: 15 }]}>Continue Watching</Text>

        <FlatList
          data={FILMESASSISTINDO}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.containerCards}>
              <TouchableOpacity style={styles.containerImg}>
                <Image source={item.filmesURL} style={styles.img} />
              </TouchableOpacity>
            </View>
          )}
          horizontal
          contentContainerStyle={styles.contentLista}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.filmeTexto}>Crime Movies</Text>
        </View>

        <FlatList
          data={FILMESORIGINAIS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.containerImg}>
              <Image source={item.filmesURL} style={styles.img} />
            </TouchableOpacity>

          )}
          horizontal
          contentContainerStyle={styles.contentLista}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.filmeTexto}>Watch in your language</Text>
        </View>

        <FlatList
          data={FILMESRECOMENDADOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.containerImg}>
              <Image source={item.filmesURL} style={styles.img} />
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={styles.contentLista}
        />

      </ScrollView>
    </View>

  );
};
