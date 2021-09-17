import React from 'react';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      clearButtonMode="always"
      placeholder={t('Search')}
      onChangeText={onChangeText}
      value={value}
      style={textInputBarStyles.searchBar}
    />
  );
};
