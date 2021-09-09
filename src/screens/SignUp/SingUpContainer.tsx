import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {SignUpScreen} from './SignUpScreen';
import {LoggedOutScreensProps} from '../../navigation';
import {SignUpFormTypes} from './SignUpScreen';
import auth from '@react-native-firebase/auth';

export const SingUpContainer: React.FC = () => {
  const navigation = useNavigation<LoggedOutScreensProps>();

  const onPressLogIn = () => {
    navigation.navigate('LogIn');
  };

  const onPressSignUp = (values: SignUpFormTypes) => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SignUpScreen onPressLogIn={onPressLogIn} onPressSignUp={onPressSignUp} />
  );
};
