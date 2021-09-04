import {StyleSheet, ViewStyle} from 'react-native';

type SuperHeroesListStylesTypes = {
  headerContainer: ViewStyle;
  searchContainer: ViewStyle;
  list: ViewStyle;
};

export const superHeroesListStyles =
  StyleSheet.create<SuperHeroesListStylesTypes>({
    headerContainer: {
      height: 90,
      justifyContent: 'center',
      backgroundColor: '#f2f2f2',
      width: '100%',
    },
    searchContainer: {
      width: '90%',
      alignSelf: 'center',
    },
    list: {
      alignSelf: 'center',
      minWidth: '90%',
      maxWidth: '95%',
    },
  });
