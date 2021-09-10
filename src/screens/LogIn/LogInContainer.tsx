import React from 'react';
import {useDispatch} from 'react-redux';
import {LogInScreen} from './LogInScreen';
import {LOG_IN} from '../../redux/actions/authActionsTypes';
import {useNavigation} from '@react-navigation/core';
import {LoggedOutScreensProps} from '../../navigation';
import {LogInFormTypes} from './LogInScreen';
import auth from '@react-native-firebase/auth';

export const LogInContainer: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<LoggedOutScreensProps>();

  const onPressLogIn = (values: LogInFormTypes) => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User account signed in!');
        dispatch({type: LOG_IN});
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onPressSignUp = () => navigation.navigate('SignUp');

  return (
    <LogInScreen onPressSignUp={onPressSignUp} onPressLogIn={onPressLogIn} />
  );
};
