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
        return <Container>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={{ alignItems: 'center' }}>

                <Header />
            </View>
            <TouchableOpacity style={{ marginTop: 25, alignItems: 'flex-start' }} onPress={() => this.props.navigation.navigate('Menu')} >
                <Icon
                    name='home'
                    size={20}
                    color='#FFF'
                />
            </TouchableOpacity>
            <Content style={{ marginTop: 25, backgroundColor: "blue"}}>
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
            </Content>
        </Container>
    }
}
