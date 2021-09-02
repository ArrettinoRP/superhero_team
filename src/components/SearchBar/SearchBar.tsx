import React from 'react';
import {TextInput, View} from 'react-native';
import {searchBarStyles} from './searchBarStyles';

export const SearchBar: React.FC = () => {
  return (
    <View style={searchBarStyles.searchBarContainer}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        placeholder="Search"
        style={searchBarStyles.searchBar}
      />
    </View>
  );
};
