import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Header from '../components/Header';
import pecasImage from '../assets/water-pump.png';
import cadastroPecasImage from '../assets/maintenance.png';
import servicesImage from '../assets/car.png';
import cadastroServicesImage from '../assets/technician.png';

export default class Menu extends Component {
  state = {
    usuario: '',
    admin: false,
  };

  componentDidMount() {
    const paramAdmin = this.props.navigation.getParam('admin');
    console.log(paramAdmin);
    this.setState({admin: paramAdmin});
    console.log(this.state.admin);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: '#34495e',
        }}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />
        <Header />
        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => this.props.navigation.navigate('Pecas')}>
          <View style={{width: '40%'}}>
            <Image source={pecasImage} style={{width: 40, height: 40}} />
          </View>
          <View style={{width: '60%', justifyContent: 'center'}}>
            <Text style={styles.buttonTitle}>Peças</Text>
          </View>
        </TouchableOpacity>

        {this.state.admin && (
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={() => this.props.navigation.navigate('CadPecas')}>
            <View style={{width: '40%'}}>
              <Image
                source={cadastroPecasImage}
                style={{width: 40, height: 40}}
              />
            </View>
            <View style={{width: '60%', justifyContent: 'center'}}>
              <Text style={styles.buttonTitle}>Cadastrar Peça</Text>
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => this.props.navigation.navigate('Servicos')}>
          <View style={{width: '40%'}}>
            <Image source={servicesImage} style={{width: 40, height: 40}} />
          </View>
          <View style={{width: '60%', justifyContent: 'center'}}>
            <Text style={styles.buttonTitle}>Serviços</Text>
          </View>
        </TouchableOpacity>
        {this.state.admin && (
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={() => this.props.navigation.navigate('CadServicos')}>
            <View style={{width: '40%'}}>
              <Image
                source={cadastroServicesImage}
                style={{width: 40, height: 40}}
              />
            </View>
            <View style={{width: '60%', justifyContent: 'center'}}>
              <Text style={styles.buttonTitle}>Cadastrar Servico</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  /* Here style the background of your button */
  customBtnBG: {
    marginTop: 25,
    backgroundColor: '#3498db',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#FFF',
  },
});
