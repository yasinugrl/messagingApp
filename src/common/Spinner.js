import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { SpinnerStyle } from '../styles'

const Spinner = ({ size, color }) => {
  return (
    <View style={SpinnerStyle.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color} />
    </View>
  );
};
export { Spinner };
