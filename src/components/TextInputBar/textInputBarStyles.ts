import {StyleSheet, TextStyle} from 'react-native';

type TextInputBarStylesTypes = {
  searchBar: TextStyle;
};

export const textInputBarStyles = StyleSheet.create<TextInputBarStylesTypes>({
  searchBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
