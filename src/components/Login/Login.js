import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Estilos
import styles from './styles'
import { Form, Item, Input, Label, Container } from 'native-base';

class Login extends Component {

	render() {
    return (
      <View style={styles.container}>        
		<Logo />
        <View style={styles.formContainer}>
			<Form style={{marginTop:20}}>
				<Item stackedLabel>
					<Label>Usuario</Label>
					<Input  
					ref='email' 					
					keyboardType='email-address' 
					returnKeyType='next' 
					autoCapitalize='none' 
					onSubmitEditing={()=>{this.refs.passwordField._root.focus();}}
					/>
				</Item>
				<Item stackedLabel last>
					<Label>Senha</Label>
					<Input
						ref='passwordField' 						
						returnKeyType='go' 
						secureTextEntry 
						autoCapitalize='none'
					/>
				</Item>
			</Form>
        </View>
      </View>
    );
  }
}

export default Login;