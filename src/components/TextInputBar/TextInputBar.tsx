import React from 'react';
import {TextInput} from 'react-native';
import {textInputBarStyles} from './textInputBarStyles';

interface TextInputBarPropsTypes {
  value: string;
  onChangeText: (text: string) => void;
}

export const TextInputBar: React.FC<TextInputBarPropsTypes> = ({
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      clearButtonMode="always"
      placeholder="Search"
      onChangeText={onChangeText}
      value={value}
      style={textInputBarStyles.searchBar}
    />
  );
};
