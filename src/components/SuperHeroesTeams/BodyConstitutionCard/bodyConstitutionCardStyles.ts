import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface BodyConstitutionCardStylesTypes {
  bodyConstitutionCard: ViewStyle;
  title: TextStyle;
  text: TextStyle;
}

export const bodyConstitutionCardStyles =
  StyleSheet.create<BodyConstitutionCardStylesTypes>({
    bodyConstitutionCard: {
      marginTop: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    text: {
      fontWeight: 'bold',
    },
  });
