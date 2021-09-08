import React from 'react';
import {
  FlatList,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {Hero} from '../../types';
//rimport {SuperHeroCard} from '../SuperHeroCard/SuperHeroCard';
import {SuperHeroListCardContainer} from '../SuperHeroesListCard/SuperHeroListCardContainer';
import {TextInputBar} from '../TextInputBar/TextInputBar';
import {HideOnScroll} from '../Animations';
import {superHeroesListStyles} from './superHeroesListStyles';

interface superHeroesListPropsTypes {
  superHeroesList: Hero[];
  numColumns: number;
  searchBarValue: string;
  scrollY: any;
  SearchBarHeight: number;
  onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onChangeSearchBar: (text: string) => void;
}

export const SuperHeroesList: React.FC<superHeroesListPropsTypes> = ({
  superHeroesList,
  numColumns,
  searchBarValue,
  scrollY,
  SearchBarHeight,
  onScroll,
  onChangeSearchBar,
}) => {
  return (
    <View>
      <HideOnScroll scrollY={scrollY} height={SearchBarHeight}>
        <View style={superHeroesListStyles.headerContainer}>
          <View style={superHeroesListStyles.searchContainer}>
            <TextInputBar
              value={searchBarValue}
              onChangeText={onChangeSearchBar}
            />
          </View>
        </View>
      </HideOnScroll>
      <FlatList
        ListHeaderComponent={<View style={{height: SearchBarHeight}} />}
        data={superHeroesList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => '_' + item.id}
        renderItem={({item}: {item: Hero}) => (
          <SuperHeroListCardContainer superHero={item} />
        )}
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        style={superHeroesListStyles.list}
      />
    </View>
  );
};
