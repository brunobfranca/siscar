import React from 'react';
import {View, Dimensions, Text} from 'react-native';

export default function Header() {
  const heightHeader = Dimensions.get('window').height * 0.2;

  return (
    <View
      style={{
        height: heightHeader,
        width: '65%',
        alignSelf: 'center',
        backgroundColor: '#3498db',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: Dimensions.get('window').height * 0.08,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: '#FFF',
          textAlign: 'center',
        }}>
        Siscar
      </Text>
    </View>
  );
}
