import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {SignUpScreen} from './SignUpScreen';
import {LoggedOutScreensProps} from '../../navigation';
import {SignUpFormTypes} from './SignUpScreen';
import {useErrorsMessages} from '../../hooks/errors/useErrorsMessages';
import auth from '@react-native-firebase/auth';
import {ModalErrorMessage} from '../../components/ErrorModal/ErrorModal';
import {ErrorScreen} from '../Error';

export const SingUpContainer: React.FC = () => {
  const navigation = useNavigation<LoggedOutScreensProps>();
  const [isErrorModalVisible, setIsErrorModalVisible] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ModalErrorMessage>({
    title: '',
    description: '',
    closeText: '',
  });
  const [error, setError] = useState<boolean>(false);
  const {invalidLogIn} = useErrorsMessages();

  const onPressLogIn = () => {
    navigation.navigate('LogIn');
  };

  const onPressSignUp = (values: SignUpFormTypes) => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        showToastWithGravity();
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          setErrorMessage(invalidLogIn);
          setIsErrorModalVisible(true);
        } else if (err.code === 'auth/invalid-email') {
          setErrorMessage(invalidLogIn);
          setIsErrorModalVisible(true);
        } else if (err.code === 'auth/weak-password') {
          setErrorMessage(invalidLogIn);
          setIsErrorModalVisible(true);
        } else {
          setError(true);
        }
      });
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'User account created',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
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
