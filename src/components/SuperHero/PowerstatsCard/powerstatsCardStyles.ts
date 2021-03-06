import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface PowerstatsCardStylesTypes {
  powerstatsCard: ViewStyle;
  title: TextStyle;
  text: TextStyle;
}

export const powerstatsCardStyles =
  StyleSheet.create<PowerstatsCardStylesTypes>({
    powerstatsCard: {
      width: '90%',
    },
    title: {
      marginTop: 20,
      fontSize: 17,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  });
