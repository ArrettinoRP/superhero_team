import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {SignUpScreen} from './SignUpScreen';
import {LoggedOutScreensProps} from '../../navigation';
import {SignUpFormTypes} from './SignUpScreen';
import {invalidLogIn} from '../../Errors/ErrorsMessages';
import auth from '@react-native-firebase/auth';
import {ErrorMessage} from '../../components/ErrorModal/ErrorModal';
import {ErrorScreen} from '../Error';

export const SingUpContainer: React.FC = () => {
  const navigation = useNavigation<LoggedOutScreensProps>();
  const [isErrorModalVisible, setIsErrorModalVisible] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({
    title: '',
    description: '',
    closeText: '',
  });
  const [error, setError] = useState<boolean>(false);

  const onPressLogIn = () => {
    navigation.navigate('LogIn');
  };

  const onPressSignUp = (values: SignUpFormTypes) => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          setErrorMessage(invalidLogIn);
          setIsErrorModalVisible(true);
        } else if (err.code === 'auth/invalid-email') {
          setErrorMessage(invalidLogIn);
          setIsErrorModalVisible(true);
        } else {
          setError(true);
        }

        console.error(error);
      });
  };

  const onPressErrorModalCloseButton = () => setIsErrorModalVisible(false);
  if (error) {
    <ErrorScreen />;
  }

  return (
    <SignUpScreen
      errorMessage={errorMessage}
      onPressErrorModalCloseButton={onPressErrorModalCloseButton}
      isErrorModalVisible={isErrorModalVisible}
      onPressLogIn={onPressLogIn}
      onPressSignUp={onPressSignUp}
    />
  );
};
