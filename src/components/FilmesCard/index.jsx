import { TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { styles } from './style';

export const FilmesCard = (props) => {
  return (
    <TouchableOpacity>
      <Image source={props.filmesURL} style={styles.img} />
    </TouchableOpacity>
  );
};
