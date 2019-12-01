import React, {Component} from 'react';

import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Container, List, ListItem, Left, Body, Right} from 'native-base';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isTerminatorless} from '@babel/types';
import image from '../assets/lampada.jpg';
import axios from 'axios';
import api from './api';
import {func} from 'prop-types';

// import { Container } from './styles';

export default class Pecas extends Component {
  state = {
    arrayPecas: [],
  };

  componentDidMount = async () => {
    await axios.get('http://192.168.0.112:3000/pecas').then(res => {
      this.setState({arrayPecas: res.data});
      console.log(res.data);
    });
  };

  render() {
    return (
      <Container style={{backgroundColor: '#576574'}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              marginTop: Dimensions.get('screen').height * 0.15,
              marginHorizontal: Dimensions.get('screen').width * 0.06,
            }}
            onPress={() => this.props.navigation.navigate('Menu')}>
            <Icon name="home" size={20} color="#FFF" />
          </TouchableOpacity>
          <Header />
        </View>

        <View
          style={{backgroundColor: '#c8d6e5', borderRadius: 10, margin: 10}}>
          <Text style={{fontSize: 25, color: '#FFF', textAlign: 'center'}}>
            Peças
          </Text>
          {this.state.arrayPecas.map(item => {
            return (
              <List key={item.idpecas}>
                <ListItem avatar>
                  <Left>
                    <Text>{item.idpecas}</Text>
                  </Left>
                  <Body>
                    <Text>{item.nome}</Text>
                    <Text note>{item.descricao}</Text>
                  </Body>
                  <Right>
                    <Text note>R$: {item.valor}</Text>
                  </Right>
                </ListItem>
              </List>
            );
          })}
        </View>
      </Container>
    );
  }
}
