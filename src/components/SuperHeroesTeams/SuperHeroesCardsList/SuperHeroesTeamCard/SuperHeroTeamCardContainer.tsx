import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {SuperHeroTeamCard} from './SuperHeroTeamCard';
import {LoggedInScreensProps} from '../../../../navigation';

interface SuperHeroesTeamCardContianerPropsType {
  imageUrl?: string;
  name?: string;
  alignment?: string;
  index: number;
  id?: number;
}

export const SuperHeroTeamCardContainer: React.FC<SuperHeroesTeamCardContianerPropsType> =
  ({imageUrl, name, alignment, index, id}) => {
    const navigation = useNavigation<LoggedInScreensProps>();
    const onPressHeroDetails = () =>
      navigation.navigate('SuperHero', {id: id || 0});
    const onPressAddSuperHero = () =>
      navigation.navigate('Menu', {screen: 'List'});
    return (
      <SuperHeroTeamCard
        imageUrl={imageUrl}
        name={name}
        alignment={alignment}
        index={index}
        onPress={alignment ? onPressHeroDetails : onPressAddSuperHero}
      />
    );
  };
