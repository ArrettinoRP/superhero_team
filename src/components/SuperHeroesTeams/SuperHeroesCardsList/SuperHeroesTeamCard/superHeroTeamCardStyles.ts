import {StyleSheet, ViewStyle} from 'react-native';

interface superHeroTeamCardStylesTypes {
  removeButtonContainer: ViewStyle;
}

export const superHeroTeamCardStyles =
  StyleSheet.create<superHeroTeamCardStylesTypes>({
    removeButtonContainer: {
      width: 30,
      height: 30,
      position: 'absolute',
      alignSelf: 'flex-end',
      marginRight: 10,
      marginTop: 10,
    },
  });
