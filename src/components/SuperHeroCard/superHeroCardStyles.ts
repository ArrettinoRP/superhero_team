import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type SuperHeroCardStylesTypes = {
  cardContainer: ViewStyle;
  image: ImageStyle;
  name: TextStyle;
};
export const superHeroCardImageWidth = 160;

export const superHeroCardStyles = StyleSheet.create<SuperHeroCardStylesTypes>({
  cardContainer: {
    backgroundColor: 'grey',
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: superHeroCardImageWidth,
    height: 240,
  },
  name: {
    marginTop: 4,
    fontSize: 15,
    fontFamily: 'Roboto',
    marginBottom: 5,
  },
});