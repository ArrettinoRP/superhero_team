import {StyleSheet, ViewStyle} from 'react-native';

type SuperHeroesCardStylesTypes = {
  headerContainer: ViewStyle;
  searchContainer: ViewStyle;
  list: ViewStyle;
};

export const superHeroesCardStyles =
  StyleSheet.create<SuperHeroesCardStylesTypes>({
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
    },
  });
