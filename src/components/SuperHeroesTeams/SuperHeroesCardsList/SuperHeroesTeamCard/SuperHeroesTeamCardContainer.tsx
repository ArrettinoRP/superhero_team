import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {SuperHeroesTeamCard} from './SuperHeroesTeamCard';
import {LoggedInScreensProps} from '../../../../navigation';

interface SuperHeroesTeamCardContianerPropsType {
  imageUrl?: string;
  name?: string;
  alignment?: string;
  index: number;
  id?: number;
}

export const SuperHeroesTeamCardContainer: React.FC<SuperHeroesTeamCardContianerPropsType> =
  ({imageUrl, name, alignment, index, id}) => {
    const navigation = useNavigation<LoggedInScreensProps>();
    const onPressHeroDetails = () =>
      navigation.navigate('SuperHero', {id: id || 0});
    const onPressAddSuperHero = () =>
      navigation.navigate('Menu', {screen: 'List'});
    return (
      <SuperHeroesTeamCard
        imageUrl={imageUrl}
        name={name}
        alignment={alignment}
        index={index}
        onPress={alignment ? onPressHeroDetails : onPressAddSuperHero}
      />
    );
  };
