import React from 'react';
import {FlatList} from 'react-native';
import {Hero} from '../../types';
import {SuperHeroCard} from '../SuperHeroCard/SuperHeroCard';
import {SearchBar} from '../SearchBar/SearchBar';

interface superHeroesCardViewPropsTypes {
  superHeroesList: Hero[];
  numColumns: number;
  searchBarValue: string;
  onChangeSearchBar: (text: string) => void;
}

export const SuperHeroesCardView: React.FC<superHeroesCardViewPropsTypes> = ({
  superHeroesList,
  numColumns,
  searchBarValue,
  onChangeSearchBar,
}) => {
  return (
    <FlatList
      ListHeaderComponent={
        <SearchBar value={searchBarValue} onChangeText={onChangeSearchBar} />
      }
      data={superHeroesList}
      keyExtractor={item => '_' + item.id}
      renderItem={({item}) => <SuperHeroCard superHeroData={item} />}
      numColumns={numColumns}
    />
  );
};
