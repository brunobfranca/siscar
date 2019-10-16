import React, { Component } from 'react';

import { View, StatusBar, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isTerminatorless } from '@babel/types';
import image from '../assets/lampada.jpg';

// import { Container } from './styles';

const array = [
    {
        id: image,
        nome: "Lampada",
        preco: "10.00",
        qnt: "5"
    },
    {
        id: image,
        nome: "Lanterna",
        preco: "100.00",
        qnt: "2"
    }
]

export default class Pecas extends Component {
    render() {
        return <Container>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={{alignItems: 'center'}}>
                
                <Header />
            </View>
            <TouchableOpacity style={{ marginTop: 25, alignItems: 'flex-start' }} onPress={() => this.props.navigation.navigate('Menu')} >
                <Icon
                    name='home'
                    size={20}
                    color='grey'
                />
            </TouchableOpacity>
            <Content style={{ marginTop: 25 }}>
                {
                    array.map(item => {
                        return <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={item.id} />
                                </Left>
                                <Body>
                                    <Text>{item.nome}</Text>
                                    <Text note>{item.qnt}</Text>
                                </Body>
                                <Right>
                                    <Text note>R$: {item.preco}</Text>
                                </Right>
                            </ListItem>
                        </List>
                    })
                }
            </Content>
        </Container>
    }
}

