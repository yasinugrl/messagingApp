import React from 'react';
import { TextInput } from 'react-native';
import { InputStyle } from '../styles';

const Input = ({ placeholder, value, onChangeText,
  secureTextEntry, inputStyl, keyboardType, ref, onFocus, onEndEditing, placeholderColor, multiline,  numberOfLines }) => {
  return (
    <TextInput
      ref={ref}
      onFocus={onFocus}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      autoCorrect={false}
      style={[InputStyle.inputStyle, inputStyl]}
      value={value}
      onChangeText={onChangeText}
      returnKeyType="next"
      keyboardType={keyboardType}
      underlineColorAndroid="transparent"
      onEndEditing={onEndEditing}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
};

export { Input };
