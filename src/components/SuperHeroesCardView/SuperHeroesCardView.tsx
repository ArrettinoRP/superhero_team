import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import {Hero} from '../../types';
import {SuperHeroCard} from '../SuperHeroCard/SuperHeroCard';
import {superHeroCardImageWidth} from '../SuperHeroCard/superHeroCardStyles';

interface superHeroesCardViewPropsTypes {
  superHeroesList: Hero[];
}
const windowWidth = Dimensions.get('window').width;

export const SuperHeroesCardView: React.FC<superHeroesCardViewPropsTypes> = ({
  superHeroesList,
}) => {
  const numColumns = Math.trunc(windowWidth / superHeroCardImageWidth);
  return (
    <FlatList
      data={superHeroesList}
      keyExtractor={item => '_' + item.id}
      renderItem={({item}) => <SuperHeroCard superHeroData={item} />}
      numColumns={numColumns}
    />
  );
};