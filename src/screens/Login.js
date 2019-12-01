import React, { Component } from 'react';

import {
  View,
  Button,
  StyleSheet,
  ImageBackground,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import axios from 'axios';
import api from './api';

import image from '../assets/imageBackground.jpg';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    admin: '',
  };

  logar = async () => {
    try {
      await axios
        .post('http://192.168.0.112:3000/login', {
          email: this.state.email,
          password: this.state.password,
        })
        .then(res => {
          const admin = res.data.admin;
          const nome = res.data.name;
          this.props.navigation.navigate('Menu', { admin: admin, nome: nome });
        });
    } catch (err) {
      if(err.response.status===400){
        Alert.alert(err.response.data);          
      }
      if(err.response.status===401){
        Alert.alert(err.response.data);
      }
      console.log(err.response);
    }
  };
  render() {
    const { height } = Dimensions.get('window');
    const heightPercent = height * 0.3;

    return (
      <ImageBackground
        source={image}
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Header />
        <View
          style={{
            marginTop: 100,
            width: '80%',
            backgroundColor: '#FFF',
            padding: 20,
            borderRadius: 10,
          }}>
          <Input
            placeholder="email"
            style={{ textAlign: 'center' }}
            leftIcon={<Icon name="user" size={20} color="grey" />}
            onChangeText={texto =>
              this.setState({
                email: texto,
              })
            }
          />
          <Input
            placeholder="senha"
            secureTextEntry={true}
            disabledInputStyle={true}
            style={{ marginBottom: 20, textAlign: 'center' }}
            leftIcon={<Icon name="lock" size={20} color="grey" />}
            onChangeText={texto =>
              this.setState({
                password: texto,
              })
            }
          />
          <TouchableOpacity style={{ marginTop: 20 }}>
            <Button
              title="entrar"
              onPress={this.logar}
              style={{ width: '60%', alignSelf: 'center' }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 10 }}>
            <Button
              title="Criar Conta"
              onPress={() => this.props.navigation.navigate('TelaDeCadastro')}
              style={{ width: '60%', alignSelf: 'center' }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  campoDeTexto: {
    backgroundColor: '#FFF',
    height: 40,
    width: 100,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 0,
  },
});
