import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface formikErrorStylesTypes {
  errorContainer: ViewStyle;
  errorText: TextStyle;
}

export const formikErrorStyles = StyleSheet.create<formikErrorStylesTypes>({
  errorContainer: {
    width: '85%',
    alignItems: 'flex-start',
    marginTop: 2,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
  },
});
