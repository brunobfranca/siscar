import React from 'react';
import { View, Dimensions, Text } from 'react-native';

export default function Header() {
    
    const heightHeader = Dimensions.get('window').height * 0.2;

    return (
    <View style={{height: heightHeader, width: '80%'}}>
        <Text style={{fontSize: 95 ,color: "#FFF", textAlign:"center" , marginTop: 25}}>Siscar</Text>
    </View>
  );
}
