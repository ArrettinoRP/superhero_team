import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface BasicInformationCardStylesTypes {
  basicInformationCard: ViewStyle;
  title: TextStyle;
  text: TextStyle;
}

export const basicInformationCardStyles =
  StyleSheet.create<BasicInformationCardStylesTypes>({
    basicInformationCard: {
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
