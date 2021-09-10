import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type SuperHeroCardStylesTypes = {
  cardContainer: ViewStyle;
  image: ImageStyle;
  name: TextStyle;
};
export const superHeroCardImageWidth = 160;
export const superHeroCardImageMargin = 5;

export const superHeroCardStyles = StyleSheet.create<SuperHeroCardStylesTypes>({
  cardContainer: {
    margin: superHeroCardImageMargin,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 360,
  },
  name: {
    marginTop: 4,
    fontSize: 15,
    fontFamily: 'Roboto',
    marginBottom: 5,
    alignSelf: 'center',
    maxWidth: 240,
  },
});
