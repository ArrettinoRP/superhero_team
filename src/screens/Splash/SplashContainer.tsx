import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {MainScreensProps} from '../../navigation';
import {SplashScreen} from './SplashScreen';
import {useSelector} from 'react-redux';
import {Store} from '../../types';

export const SplashContianer: React.FC = () => {
  const navigation = useNavigation<MainScreensProps>();
  const loggedIn = useSelector((store: Store) => store.auth.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate('LoggedIn', {
        screen: 'Menu',
        params: {screen: 'Home'},
      });
    } else {
      navigation.navigate('LoggedOut', {screen: 'Welcome'});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  return <SplashScreen />;
};
