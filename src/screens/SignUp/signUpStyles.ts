import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface SignUpStylesTypes {
  signUpContianer: ViewStyle;
  formContainer: ViewStyle;
  form: ViewStyle;
  textInput: TextStyle;
  signUpButton: ViewStyle;
  logInContrainer: ViewStyle;
  logIn: ViewStyle;
  logInText: TextStyle;
  logInLink: TextStyle;
}

export const signUpStyles = StyleSheet.create<SignUpStylesTypes>({
  signUpContianer: {
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
    marginTop: 10,
    paddingTop: 9,
    paddingBottom: 7,
    paddingLeft: 8,
    fontSize: 15,
  },
  signUpButton: {
    marginTop: 10,
    width: '80%',
  },
  logInContrainer: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  logIn: {
    borderTopColor: '#a2a2a2',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  logInText: {
    color: '#a2a2a2',
  },
  logInLink: {
    color: '#002395',
    fontWeight: 'bold',
  },
});
