import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({label, style = {}, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#446cfa',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        ...style
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: !Object.keys(style).length ? '#fff' : style.fontColor ? style.fontColor : '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;