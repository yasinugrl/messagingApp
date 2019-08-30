import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
import { Spinner } from '../common';


const { width } = Dimensions.get('window');


const Button = ({ onPress, text, styl, textStyl, isLoading }) => {
  const { buttonStyle, textStyle } = syles;
    return (
      <TouchableOpacity onPress={onPress} style={[buttonStyle, styl]} activeOpacity={0.8}>
      { isLoading ?
      <Spinner size="small" />
       : 
       <Text style={[textStyle, textStyl]}> {text} </Text>
      }
        
      </TouchableOpacity>
    );
};
const syles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    letterSpacing: 5 

  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 50,
    width: width - 50,
    borderRadius: 25,
    marginBottom: 20,
  }
};
export { Button };
