import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../src/screens/Login';
import Menu from '../src/screens/Menu';
import pecas from '../src/screens/pecas';

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
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
