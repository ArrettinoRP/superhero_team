import {StyleSheet, ViewStyle} from 'react-native';

type HomeScreenStylesTypes = {
  superHeroesCardViewContainer: ViewStyle;
};

export const homeScreenStyles = StyleSheet.create<HomeScreenStylesTypes>({
  superHeroesCardViewContainer: {
    alignItems: 'center',
  },
});
