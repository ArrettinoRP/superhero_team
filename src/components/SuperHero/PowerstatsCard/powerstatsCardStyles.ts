import {StyleSheet, TextStyle} from 'react-native';

interface PowerstatsCardStylesTypes {
  title: TextStyle;
  text: TextStyle;
}

export const powerstatsCardStyles =
  StyleSheet.create<PowerstatsCardStylesTypes>({
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
