import React from 'react';
import {TextInput, View} from 'react-native';
import {searchBarStyles} from './searchBarStyles';

interface SearchBarPropsTypes {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarPropsTypes> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={searchBarStyles.searchBarContainer}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        placeholder="Search"
        onChangeText={onChangeText}
        value={value}
        style={searchBarStyles.searchBar}
      />
    </View>
  );
};
