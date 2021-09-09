import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {WelcomeScreen} from './WelcomeScreen';
import {LoggedOutScreensProps} from '../../navigation';

export const WelcomeContainer: React.FC = () => {
  const navigation = useNavigation<LoggedOutScreensProps>();
  const onPress = () => navigation.navigate('LogIn');
  return <WelcomeScreen onPress={onPress} />;
};
