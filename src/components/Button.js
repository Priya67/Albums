import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5
  }
};
export default Button;
