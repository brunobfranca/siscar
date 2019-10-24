import React, { Component } from 'react';

import { View, Button, TextInput, StyleSheet, ImageBackground, Text, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';

import image from '../assets/imageBackground.jpg';

export default class TelaDeCadastro extends Component {

    state = {
        
        username: '',
        password: '',
        email: '',
        telefone: '',
        
    }

    logar() {
        // Requisição na api de logar
        // this.state.username
        // this.state.password  
        // Toast dialog p/ erros
    }

    render() {
        const { height } = Dimensions.get('window');
        const heightPercent = height * 0.3;

        return (
            <View style={{ width: '100%', height: '100%', alignItems: 'center', backgroundColor: "#808080" }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Header />
                <Text style={{ fontSize: 25, color: "#FFF", textAlign: "center", marginTop: 25 }}>Cadastro</Text>
                <View style={{ marginTop: 50, width: '80%', backgroundColor: "#FFF", padding: 20, borderRadius: 10 }}>
                    <Input
                        placeholder='nome'
                        style={{ textAlign: "center" }}
                        leftIcon={
                            <Icon
                                name='user'
                                size={20}
                                color='grey'
                            />
                        }
                        onChangeText={texto => this.setState({
                           username: texto
                        })}
                    />
                    <Input
                        placeholder='senha'
                        secureTextEntry={true}
                        disabledInputStyle={true}
                        style={{ marginBottom: 20, textAlign: "center" }}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={20}
                                color='grey'
                            />
                        }
                        onChangeText={texto => this.setState({
                            password: texto
                        })}
                    />
                    <Input
                        placeholder='email'
                        secureTextEntry={true}
                        disabledInputStyle={true}
                        style={{ marginBottom: 20, textAlign: "center" }}
                        leftIcon={
                            <Icon
                                name='inbox'
                                size={20}
                                color='grey'
                            />
                        }
                        onChangeText={texto => this.setState({
                            email: texto
                        })}
                    />
                    <Input
                        placeholder='telefone'
                        style={{ marginBottom: 20, textAlign: "center" }}
                        leftIcon={
                            <Icon
                                name='phone'
                                size={20}
                                color='grey'
                            />
                        }
                        onChangeText={texto => this.setState({
                            telefone: texto
                        })}
                    />
                    <TouchableOpacity style={{ marginTop: 25 }}>
                        <Button title="Cadastrar" onPress={() => this.props.navigation.navigate('Menu')} style={{ width: '60%', alignSelf: 'center' }} />
                    </TouchableOpacity>

                </View>

            </View>
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


