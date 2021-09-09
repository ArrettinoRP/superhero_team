import React from 'react';
import {useDispatch} from 'react-redux';
import {LogInScreen} from './LogInScreen';
import {EDIT_LOGGED_IN} from '../../redux/actions/authActionsTypes';
import {useNavigation} from '@react-navigation/core';
import {LoggedOutScreensProps} from '../../navigation';
import {LogInFormTypes} from './LogInScreen';

export const LogInContainer: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<LoggedOutScreensProps>();

  const onPressLogIn = (values: LogInFormTypes) => {
    console.log(values);
    dispatch({type: EDIT_LOGGED_IN, payload: true});
  };

  const onPressSignUp = () => navigation.navigate('SignUp');

  return (
    <LogInScreen onPressSignUp={onPressSignUp} onPressLogIn={onPressLogIn} />
  );
};
