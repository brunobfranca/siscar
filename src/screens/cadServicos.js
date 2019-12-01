import React, { Component } from 'react';

import { View, Image, ScrollView, Button, TextInput, StyleSheet, ImageBackground, Text, StatusBar, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Header from '../components/Header';
import api from './api';
import cadastroServicesImage from '../assets/technician.png';
import image from '../assets/imageBackground.jpg';

export default class CadServicos extends Component {

    state = {

        nome: '',
        descricao: '',
        tempo: '',
        valor: '',

    }

    cadastrar = async () => {
        try {
            await api.post('salvarServico', { nome: this.state.nome, descricao: this.state.descricao, temposervico: this.state.tempo, valor: this.state.valor }).then(() => {
                Alert.alert('Cadastrado com sucesso!')
                this.props.navigation.navigate('Menu');

            })
        } catch (err) {
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
                Cadastro de Serviços
                </Text>
            <View style={{ backgroundColor: '#c8d6e5', borderRadius: 10, margin: 10, width: '80%', marginHorizontal: "10%", marginTop: 30 }}>
                <Input
                    placeholder='nome'
                    style={{ textAlign: "center" }}
                    onChangeText={texto => this.setState({
                        nome: texto
                    })}
                />
                <Input
                    placeholder='descricao'
                    style={{ marginBottom: 20, textAlign: "center" }}
                    onChangeText={texto => this.setState({
                        descricao: texto
                    })}
                />
                <Input
                    placeholder='valor'
                    disabledInputStyle={true}
                    style={{ marginBottom: 20, textAlign: "center" }}
                    onChangeText={texto => this.setState({
                        valor: texto
                    })}
                />
                <Input
                    placeholder='tempo'
                    style={{ marginBottom: 20, textAlign: "center" }}
                    onChangeText={texto => this.setState({
                        tempo: texto
                    })}
                />
            </View>
            <View style={{ width: "80%", marginHorizontal: "10%", justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.customBtnBG}
                    onPress={this.cadastrar}>
                    <View style={{ width: '40%' }}>
                        <Image
                            source={cadastroServicesImage}
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



