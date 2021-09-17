import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {AddSuperHeroesTeamCard} from './AddSuperHeroesTeamCard';
import {LoggedInScreensProps} from '../../../navigation';

export const AddSuperHeroesTeamCardContainer: React.FC = () => {
  const navigation = useNavigation<LoggedInScreensProps>();
  const onPress = () => navigation.navigate('Menu', {screen: 'List'});
  return <AddSuperHeroesTeamCard onPress={onPress} />;
};
