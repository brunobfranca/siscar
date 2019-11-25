import React, { Component } from 'react';

import { View, Button, TextInput, StyleSheet, ImageBackground, Text, StatusBar, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import api from './api';

import image from '../assets/imageBackground.jpg';

export default class CadPecas extends Component {

    state = {

        nome: '',
        descricao: '',
        preco: '',
        quantidade: '',

    }

    cadastrar = async () => {
        try {
            await api.post('salvarPeca', { name: this.state.nome, password: this.state.descricao, email: this.state.preco }).then(() => {
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
                        onChangeText={texto => this.setState({
                            username: texto
                        })}
                    />
                    <Input
                        placeholder='descricao'
                        //secureTextEntry={true}
                        disabledInputStyle={true}
                        style={{ marginBottom: 20, textAlign: "center" }}                     
                        onChangeText={texto => this.setState({
                            password: texto
                        })}
                    />
                    <Input
                        placeholder='preco'
                        disabledInputStyle={true}
                        style={{ marginBottom: 20, textAlign: "center" }}                     
                        onChangeText={texto => this.setState({
                            email: texto
                        })}
                    />
                    <Input
                        placeholder='quantidade'
                        style={{ marginBottom: 20, textAlign: "center" }}                      
                        onChangeText={texto => this.setState({
                            telefone: texto
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


