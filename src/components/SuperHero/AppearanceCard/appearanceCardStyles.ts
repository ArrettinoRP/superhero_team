import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface AppearanceCardStylesTypes {
  appearanceCard: ViewStyle;
  title: TextStyle;
  text: TextStyle;
}

export const appearanceCardStyles =
  StyleSheet.create<AppearanceCardStylesTypes>({
    appearanceCard: {
      width: '90%',
    },
    title: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  });
