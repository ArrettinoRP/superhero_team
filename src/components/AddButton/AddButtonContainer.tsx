import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {AddButton} from './AddButton';
import {MainScreenProp} from '../../navigation';

export const AddButtonContainer: React.FC = () => {
  const navigation = useNavigation<MainScreenProp>();
  const onPress = () => navigation.navigate('Home');

  return <AddButton onPress={onPress} />;
};
