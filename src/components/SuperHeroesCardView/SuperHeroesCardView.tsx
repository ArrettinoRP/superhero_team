import React from 'react';
import {FlatList} from 'react-native';
import {Hero} from '../../types';
import {SuperHeroCard} from '../SuperHeroCard/SuperHeroCard';
import {SearchBar} from '../SearchBar/SearchBar';

interface superHeroesCardViewPropsTypes {
  superHeroesList: Hero[];
  numColumns: number;
}

export const SuperHeroesCardView: React.FC<superHeroesCardViewPropsTypes> = ({
  superHeroesList,
  numColumns,
}) => {
  return (
    <FlatList
      ListHeaderComponent={SearchBar}
      data={superHeroesList}
      keyExtractor={item => '_' + item.id}
      renderItem={({item}) => <SuperHeroCard superHeroData={item} />}
      numColumns={numColumns}
    />
  );
};
