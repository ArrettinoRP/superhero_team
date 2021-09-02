import {StyleSheet, ViewStyle} from 'react-native';

type WelcomeScreenStylesTypes = {
  container: ViewStyle;
  image: ViewStyle;
};

export const welcomeStyles = StyleSheet.create<WelcomeScreenStylesTypes>({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
