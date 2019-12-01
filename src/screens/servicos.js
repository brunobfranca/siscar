import React, { Component } from 'react';

import { View, StatusBar, Text, Button, ScrollView, TouchableOpacity, Alert, Dimensions, } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Header from '../components/Header';
import { isTerminatorless } from '@babel/types';
import image from '../assets/lampada.jpg';
import axios from 'axios';
import api from './api'
import { func } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class screens extends Component {
    state = {
        arrayServicos: []
    }
    componentDidMount = async () => {
        await axios.get('http://192.168.0.112:3000/servicos').then(res => {
            this.setState({ arrayServicos: res.data })
        })
    }
    render() {
        return <Container style={{ backgroundColor: '#576574' }}>
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
                <TouchableOpacity
                    style={{
                        marginTop: Dimensions.get('screen').height * 0.15,
                        marginHorizontal: Dimensions.get('screen').width * 0.06,
                    }}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Icon name="close" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 25, color: '#FFF', textAlign: 'center' }}>
                Serviços
                </Text>
            <ScrollView
                style={{ backgroundColor: '#c8d6e5', borderRadius: 10, margin: 10 }}>

                {
                    this.state.arrayServicos.map(item => {
                        return <List>
                            <ListItem avatar>
                                <Left>
                                    <Text>{item.idservicos}</Text>
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
            </ScrollView>
        </Container>
    }
}
