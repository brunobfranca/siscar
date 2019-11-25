import React, { Component } from 'react';

import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
//import {AsyncStorage} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage'


export default class Menu extends Component {
  state = {
    usuario: '',
    admin: '',
  }
 /* _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_key');
      console.log(value)
      this.setState({
        admin: value
      })
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };*/
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      this.setState({
        admin: value
      })
      console.log('passou aqui')
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  teste =  async () =>{
    try {
     
      const value = await AsyncStorage.getItem('@storage_Key')
      this.setState({
        admin: value,
      });
      console.log('passou aqui')
      
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      console.log(e)
      // error reading value
    }
  }
  render() {
    return <ScrollView style={{ backgroundColor: "#00ffff" }}>
      <View style={{ alignItems: 'center' }}>
        <Header />
      </View>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.customBtnBG}>
          <Button title="Peças" onPress={() => this.props.navigation.navigate('Pecas')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBtnBG}>
          <Button title="Cadastrar Peça" onPress={() => this.props.navigation.navigate('CadPecas')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Button title="Serviços" onPress={() => this.props.navigation.navigate('Servicos')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBtnBG}>
          <Button title="Cadastrar Servico" onPress={() => this.props.navigation.navigate('CadPecas')} />
        </TouchableOpacity>
        <Text>
            {this.state.admin}       
        </Text>
        <TouchableOpacity style={styles.customBtnBG}>
          <Button title="teste" onPress={this.teste} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  }
}
const styles = StyleSheet.create({


  /* Here style the background of your button */
  customBtnBG: {
    marginTop: 25,
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
  }
});
