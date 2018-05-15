import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

class Logo extends Component {
  render() {
    return (
        <Image style={styles.logo} source={require('../../images/MainLogo.png')} />        
    );
  }
}

export default Logo;
