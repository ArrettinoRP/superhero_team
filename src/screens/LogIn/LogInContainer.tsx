import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {LogInScreen} from './LogInScreen';
import {LOG_IN} from '../../redux/actions/authActionsTypes';
import {useNavigation} from '@react-navigation/core';
import {LoggedOutScreensProps} from '../../navigation';
import {LogInFormTypes} from './LogInScreen';
import auth from '@react-native-firebase/auth';
import {ErrorMessage} from '../../components/ErrorModal/ErrorModal';
import {invalidLogIn} from '../../Errors/ErrorsMessages';
import {ErrorScreen} from '../Error';

export const LogInContainer: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<LoggedOutScreensProps>();
  const [isErrorModalVisible, setIsErrorModalVisible] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    title: '',
    description: '',
    closeText: '',
  });
  const [error, setError] = useState<boolean>(false);

  const onPressLogIn = (values: LogInFormTypes) => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User account signed in!');
        dispatch({type: LOG_IN});
      })
      .catch(err => {
        console.log(err);
        if (
          err.code === 'auth/user-not-found' ||
          err.code === 'auth/wrong-password'
        ) {
          setErrorMessage(invalidLogIn);
          setIsErrorModalVisible(true);
        } else {
          setError(true);
        }
      });
  };

  const onPressErrorModalCloseButton = () => setIsErrorModalVisible(false);
  const onPressSignUp = () => navigation.navigate('SignUp');

  if (error) {
    <ErrorScreen />;
  }

  return (
    <LogInScreen
      errorMessage={errorMessage}
      onPressErrorModalCloseButton={onPressErrorModalCloseButton}
      isErrorModalVisible={isErrorModalVisible}
      onPressSignUp={onPressSignUp}
      onPressLogIn={onPressLogIn}
    />
  );
};
