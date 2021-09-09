import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {SignUpScreen} from './SignUpScreen';
import {LoggedOutScreensProps} from '../../navigation';
import {SignUpFormTypes} from './SignUpScreen';

export const SingUpContainer: React.FC = () => {
  const navigation = useNavigation<LoggedOutScreensProps>();

  const onPressLogIn = () => {
    navigation.navigate('LogIn');
  };
  const onPressSignUp = (values: SignUpFormTypes) => {
    console.log(values);
  };

  return (
    <SignUpScreen onPressLogIn={onPressLogIn} onPressSignUp={onPressSignUp} />
  );
};
