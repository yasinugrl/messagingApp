import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
import { Spinner } from '../common';
import { ButtonStyle } from '../styles';

const Button = ({ onPress, text, styl, textStyl, isLoading }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[ButtonStyle.buttonStyle, styl]} activeOpacity={0.8}>
      {isLoading ?
        <Spinner size="small" />
        :
        <Text style={[ButtonStyle.textStyle, textStyl]}> {text} </Text>
      }
    </TouchableOpacity>
  );
};
export { Button };
