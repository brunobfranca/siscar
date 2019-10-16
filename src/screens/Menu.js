import React, { Component } from 'react';

import { View, Button, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

export default class Menu extends Component {
  render() {
    return <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <Header />
      </View>
      <View style={{ flex: 3, justifyContent: 'center' , alignItems: 'center' }}>
        <TouchableOpacity style={{ marginTop: 200 }}>
          <Button title="Peças" onPress={() => this.props.navigation.navigate('Pecas')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Button title="Serviços" onPress={() => this.props.navigation.navigate('Lista')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  }
}
