import React from 'react';
import {Dimensions} from 'react-native';
import {SuperHeroesCardView} from './SuperHeroesCardView';
import {superHeroCardImageWidth} from '../SuperHeroCard/superHeroCardStyles';
import {Hero, Store} from '../../types';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

export const SuperHeroesCardViewContainer = () => {
  const superHeroesList: Hero[] = useSelector(
    (state: Store) => state.superHeroes.list,
  );
  const numColumns = Math.trunc(windowWidth / superHeroCardImageWidth);
  return (
    <SuperHeroesCardView
      superHeroesList={superHeroesList}
      numColumns={numColumns}
    />
  );
};
