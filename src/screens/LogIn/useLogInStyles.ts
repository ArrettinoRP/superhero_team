import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

interface logInStylesTypes {
  logInContianer: ViewStyle;
  formContainer: ViewStyle;
  form: ViewStyle;
  textInput: TextStyle;
  logInButton: ViewStyle;
  signUpContrainer: ViewStyle;
  signUp: ViewStyle;
  signUpText: TextStyle;
  signUpLink: TextStyle;
}

export const useLogInStyles = () => {
  const {colors} = useTheme();
  return {
    styles: StyleSheet.create<logInStylesTypes>({
      logInContianer: {
        justifyContent: 'flex-end',
        alignContent: 'center',
        flex: 1,
        backgroundColor: colors.primaryBackground,
      },
      formContainer: {
        flex: 6,
        justifyContent: 'flex-end',
      },
      form: {
        alignItems: 'center',
      },
      textInput: {
        width: '90%',
        backgroundColor: colors.secondaryBackground,
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 9,
        paddingBottom: 7,
        paddingLeft: 8,
        fontSize: 15,
      },
      logInButton: {
        marginTop: 10,
        width: '80%',
      },
      signUpContrainer: {
        flex: 4,
        justifyContent: 'flex-end',
      },
      signUp: {
        borderTopColor: colors.border,
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
      },
      signUpText: {
        color: colors.secondaryText,
      },
      signUpLink: {
        color: colors.primary,
        fontWeight: 'bold',
      },
    }),
  };
};
