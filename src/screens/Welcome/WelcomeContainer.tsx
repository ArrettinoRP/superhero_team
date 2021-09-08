import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {WelcomeScreen} from './WelcomeScreen';
import {MainScreensProps} from '../../navigation';

export const WelcomeContainer: React.FC = () => {
  const navigation = useNavigation<MainScreensProps>();
  const onPress = () =>
    navigation.navigate('LoggedIn', {
      screen: 'Menu',
      params: {screen: 'Home'},
    });
  return <WelcomeScreen onPress={onPress} />;
};
