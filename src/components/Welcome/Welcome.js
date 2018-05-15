import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

import Logo from '../Logo/Logo';
import styles from './styles';
import Button from '../Button/Button';

import {colors } from '../../styles';

class Welcome extends Component {
    onPress = (event) => {        
        
    }
  render() {
    return (
        <View style={styles.container}>            
            <View style={styles.logoContainer}>
                <Logo />                            
                <Text style={styles.welcomeMessage}>Seja bem-vindo!</Text>
                <Text style={styles.descriptionMessage} >Escolha o perfil que você irá utilizar</Text>                
            </View>
            <View style={styles.buttonContainer}>                    
                <Button onPress={this.onPress} color={colors.secundary} type='big' style={styles.button}>Pais</Button>
                <Button onPress={this.onPress} color={colors.primary} type='big' style={styles.button}>Filho</Button>
            </View>
        </View>
    );
  }
}

export default Welcome;
