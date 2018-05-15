/* Core */
import React from 'react';

/* Presentational */
import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Button = ({ style, children, type, color, onPress }) => (
  <TouchableOpacity
    style={[
      styles.container,      
      style,
      color != "" ? { backgroundColor:  color} : {},
      type ? styles[`button-${type}`] : {},
    ]}
    onPress={onPress}
  >

    
    <Text style={[
      styles.text,      
      type ? styles[`text-${type}`] : {},
    ]}>
      { children }
    </Text>
  </TouchableOpacity>
);

export default Button;