import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type SearchBarStylesTypes = {
  searchBarContainer: ViewStyle;
  searchBar: TextStyle;
};

export const searchBarStyles = StyleSheet.create<SearchBarStylesTypes>({
  searchBarContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  searchBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});
