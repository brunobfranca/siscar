import React, { Component } from 'react';

import { View, Button } from 'react-native';

export default class Menu extends Component {
  render() {
    return <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Ir para Login" onPress={() => this.props.navigation.navigate('Login')}/>
        <Button title="Ir para Pecas" onPress={() => this.props.navigation.navigate('Pecas')}/>
    </View>;
  }
}
