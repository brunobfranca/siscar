import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const array = [
    {
        id: "1",
        Nome: "Lampada",
        Preco: "10.00",
        qnt: "5"
    },
    {
        id: "2",
        Nome: "Lanterna",
        Preco: "100.00",
        qnt: "2"
    }
]

export default class Pecas extends Component {
    render() {
        return <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Ir para Login" onPress={() => this.props.navigation.navigate('Login')} />
            <Text>passou aqui</Text>
            {
                array.map(item => {
                    return

                    <View>
                        <Text>{item.Nome}</Text>
                        <Text>{item.id}</Text>
                    </View>
                })
            }
        </View>;
    }
}

