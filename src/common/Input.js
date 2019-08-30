import React from 'react';
import { TextInput, Dimensions, Platform } from 'react-native';
const { width } = Dimensions.get('window');

const Input = ({ placeholder, value, onChangeText,
  secureTextEntry, inputStyl, keyboardType, ref, onFocus, onEndEditing, placeholderColor, multiline,  numberOfLines }) => {
  const { inputStyle } = styles;
  return (
    <TextInput
      ref={ref}
      onFocus={onFocus}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      autoCorrect={false}
      style={[inputStyle, inputStyl]}
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

const styles = {
  inputStyle: {
    color: 'black',
    padding: Platform.OS === 'ios' ? 10 : 5,
    fontSize: 14,
    backgroundColor: 'white',
    width: width - 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
};

export { Input };
