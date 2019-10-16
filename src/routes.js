import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../src/screens/Login';
import Menu from '../src/screens/Menu';
import pecas from '../src/screens/pecas';
import TelaDeCadastro from '../src/screens/TelaDeCadastro';
import Lista from '../src/screens/Lista'

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Menu: {
      screen: Menu
    },
    Pecas: {
      screen: pecas
    },
    TelaDeCadastro: {
      screen: TelaDeCadastro
    },
    Lista: {
      screen: Lista
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
