import React, { Component } from 'react';

import { View, StatusBar, Text, Button, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isTerminatorless } from '@babel/types';
import image from '../assets/lampada.jpg';
import axios from 'axios';
import api from './api'
import { func } from 'prop-types';



// import { Container } from './styles';


export default class Pecas extends Component {
    state = {
        arrayPecas: []
    }
    componentDidMount = async () => {
        await axios.get('http://192.168.0.112:3000/pecas').then(res => {
            this.setState({ arrayPecas: res.data })
            console.log(res.data)
        })
    }
    render() {
        return <Container style={{ backgroundColor: "#00ffff" }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={{ alignItems: 'center' }}>

                <Header />
            </View>

            <Text style={{ fontSize: 25, color: "#FFF", textAlign: 'center' }}>Peças</Text>
            <TouchableOpacity style={{ marginTop: 25, alignItems: 'flex-start' }} onPress={() => this.props.navigation.navigate('Menu')} >
                <Icon
                    name='home'
                    size={20}
                    color='#FFF'
                />
            </TouchableOpacity>
            <Content style={{ marginTop: 25, backgroundColor: "#FFF" }}>
                {
                    this.state.arrayPecas.map(item => {
                        return <List>
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
                    })
                }
            </Content>
        </Container>
    }
}

