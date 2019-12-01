import React, { Component } from 'react';

import { View, Button, TextInput, StyleSheet, ImageBackground, Text, StatusBar, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import api from './api';

import image from '../assets/imageBackground.jpg';
import { thisExpression } from '@babel/types';

export default class CadPecas extends Component {

    state = {
        name: '',
        descricao: '',
        valor: '',
        quantidade: ''
    }

    cadastrar = async () => {
        try {
            await api.post('salvarPeca', { name: this.state.name, descricao: this.state.descricao, valor: this.state.valor, quantidade: this.state.quantidade }).then(() => {
                Alert.alert('Cadastrado com sucesso!')
                //this.props.navigation.navigate('Menu');

            })
        } catch (err) {
            console.log(err)
        }

    }

    render() {
        const { height } = Dimensions.get('window');
        const heightPercent = height * 0.3;

        return (
            <ImageBackground source={image} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Header />
                <Text style={{ fontSize: 25, color: "#FFF", textAlign: "center", marginTop: 25 }}>Cadastro</Text>
                <View style={{ marginTop: 50, width: '80%', backgroundColor: "#FFF", padding: 20, borderRadius: 10 }}>
                    <Input
                        placeholder='nome'
                        style={{ textAlign: "center" }}
                        onChangeText={
                            texto => this.setState({
                                name: texto
                            })
                        }
                    />

                    <Input
                        placeholder='descricao'
                        //secureTextEntry={true}
                        disabledInputStyle={true}
                        style={{ marginBottom: 20, textAlign: "center" }}
                        onChangeText={texto => this.setState({
                            descricao: texto
                        })}
                    />
                    <Input
                        placeholder='preco'
                        disabledInputStyle={true}
                        style={{ marginBottom: 20, textAlign: "center" }}
                        onChangeText={texto => this.setState({
                            valor: texto
                        })}
                    />
                    <Input
                        placeholder='quantidade'
                        style={{ marginBottom: 20, textAlign: "center" }}
                        onChangeText={texto => this.setState({
                            quantidade: texto
                        })}
                    />
                    <TouchableOpacity style={{ marginTop: 25 }}>
                        <Button title="Cadastrar" onPress={this.cadastrar} style={{ width: '60%', alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    campoDeTexto: {
        backgroundColor: "#FFF",
        height: 40,
        width: 100,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 0,
    },
});


