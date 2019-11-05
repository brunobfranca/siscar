import React, { Component } from 'react';

import { View, Button, StyleSheet, ImageBackground, Text, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';

import image from '../assets/imageBackground.jpg';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    logar() {
        // Requisição na api de logar
        // this.state.username
        // this.state.password  
        // Toast dialog p/ erros
    }


    componentDidMount = async () => {
        await axios.get("https://stackovercampus.herokuapp.com/getThemes").then(function (resposta) {
            console.log(resposta.data);
        })
    }
    render() {
        const { height } = Dimensions.get('window');
        const heightPercent = height * 0.3;

        return (
            <ImageBackground source={image} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <Header />
                <View style={{ marginTop: 100, width: '80%', backgroundColor: "#FFF", padding: 20, borderRadius: 10 }}>
                    <Input
                        placeholder='email'
                        style={{ textAlign: "center" }}
                        leftIcon={
                            <Icon
                                name='user'
                                size={20}
                                color='grey'
                            />
                        }
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
                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: "center", color: "blue" }}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Button title="entrar" onPress={() => this.props.navigation.navigate('Menu')} style={{ width: '60%', alignSelf: 'center' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <Button title="Criar Conta" onPress={() => this.props.navigation.navigate('TelaDeCadastro')} style={{ width: '60%', alignSelf: 'center' }} />
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
