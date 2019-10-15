import React, { Component } from 'react';

import { View, Button, TextInput ,StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class Login extends Component {
    render() {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="e-mail" style={styles.campoDeTexto}/>
            <TextInput secureTextEntry={true} placeholder="senha " style={styles.campoDeTexto}/>
            <Button title="entrar" onPress={() => this.props.navigation.navigate('Menu')} />
        </View>;
    }
}
const styles = StyleSheet.create({
    campoDeTexto: {
      backgroundColor: "#FFF",
      height: 40,
      width: 100,
      margin: 10,
      borderColor: 'gray', 
      borderWidth: 0,
      borderRadius: 0,
    },
  });
