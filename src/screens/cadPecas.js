import React, { Component } from 'react';

import { View, Button, ScrollView, TextInput, StyleSheet, ImageBackground, Text, StatusBar, Dimensions, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import api from './api';
import cadastroPecasImage from '../assets/maintenance.png';

import image from '../assets/imageBackground.jpg';
import { thisExpression, throwStatement } from '@babel/types';

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
            if (err.response.status === 400) {
                Alert.alert(err.response.data)
            }
            if (err.response.status === 401) {
                Alert.alert('Dados incorretos!')
            }
            console.log(err)
        }

    }

    render() {
        const { height } = Dimensions.get('window');
        const heightPercent = height * 0.3;

        return (<ScrollView style={{ backgroundColor: '#576574' }}>
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
            <Text style={{ fontSize: 25, color: '#FFF', textAlign: 'center', marginTop: 30 }}>
                Cadastro de Peças
                </Text>
            <View style={{ backgroundColor: '#c8d6e5', borderRadius: 10, margin: 10, width: '80%', marginHorizontal: "10%", marginTop: 30 }}>
                <Input
                    placeholder='nome'
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

            </View>
            <View style={{width: "80%" ,marginHorizontal: "10%",justifyContent: 'center'  }}>
                <TouchableOpacity
                    style={styles.customBtnBG}
                    onPress={this.cadastrar}>
                    <View style={{ width: '40%' }}>
                        <Image
                            source={cadastroPecasImage}
                            style={{ width: 40, height: 40 }}
                        />
                    </View>
                    <View style={{ width: '60%', justifyContent: 'center' }}>
                        <Text style={styles.buttonTitle}>Cadastrar</Text>
                    </View>
                </TouchableOpacity>
            </View>



        </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    /* Here style the background of your button */
    customBtnBG: {
        marginTop: 25,
        backgroundColor: '#3498db',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonTitle: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#FFF',
    },
});


