import React, { Component } from 'react';

import { View, Button,StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

export default class Menu extends Component {
  render() {
    return <ScrollView style={{ backgroundColor: "#00ffff" }}>
      <View style={{ alignItems: 'center' }}>
        <Header />
      </View>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={ styles.customBtnBG}>
          <Button title="Peças" onPress={() => this.props.navigation.navigate('Pecas')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Button title="Serviços" onPress={() => this.props.navigation.navigate('Servicos')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
      /* Here style the text of your button */
      customBtnText: {
        fontSize: 40,
        fontWeight: '400',
        color: "#fff",
    },

  /* Here style the background of your button */
    customBtnBG: {
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
    }
});
  