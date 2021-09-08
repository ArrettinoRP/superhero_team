import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SuperHeroListCard} from './SuperHeroListCard';
import {LoggedInScreensProps} from '../../navigation';
import {Hero} from '../../types';

interface SuperHeroListCardContainerPropsTypes {
  superHero: Hero;
}

export const SuperHeroListCardContainer: React.FC<SuperHeroListCardContainerPropsTypes> =
  ({superHero}) => {
    const navigation = useNavigation<LoggedInScreensProps>();
    const onPress = () => navigation.navigate('SuperHero', {id: superHero.id});
    return <SuperHeroListCard onPress={onPress} superHero={superHero} />;
  };
