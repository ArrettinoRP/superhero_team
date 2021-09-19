import {StyleSheet, ViewStyle} from 'react-native';

interface SuperHeroImageCardStylesTypes {
  imageContainer: ViewStyle;
}

export const superHeroImageCardStyles =
  StyleSheet.create<SuperHeroImageCardStylesTypes>({
    imageContainer: {
      padding: 10,
    },
  });
