import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../src/screens/Login';
import Menu from '../src/screens/Menu';
import pecas from '../src/screens/pecas';
import TelaDeCadastro from '../src/screens/TelaDeCadastro';
import Lista from '../src/screens/Lista';
import Servicos from '../src/screens/servicos';
import CadServicos from '../src/screens/cadServicos';
import CadPecas from '../src/screens/cadPecas';

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Menu: {
      screen: Menu,
    },
    Pecas: {
      screen: pecas,
    },
    TelaDeCadastro: {
      screen: TelaDeCadastro,
    },
    Servicos: {
      screen: Servicos,
    },
    CadServicos: {
      screen: CadServicos,
    },
    CadPecas: {
      screen: CadPecas,
    },
  },
  {
    initialRouteName: 'Menu',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
