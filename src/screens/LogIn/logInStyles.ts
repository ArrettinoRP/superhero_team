import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

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

export const logInStyles = StyleSheet.create<logInStylesTypes>({
  logInContianer: {
    justifyContent: 'flex-end',
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#fafafa',
    borderWidth: 1.5,
    borderColor: '#a2a2a2',
    borderRadius: 10,
    marginBottom: 10,
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
    borderTopColor: '#a2a2a2',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
  },
  signUpText: {
    color: '#a2a2a2',
  },
  signUpLink: {
    color: '#002395',
    fontWeight: 'bold',
  },
});
