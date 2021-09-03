import React from 'react';
import {
  FlatList,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {Hero} from '../../types';
import {SuperHeroCard} from '../SuperHeroCard/SuperHeroCard';
import {TextInputBar} from '../TextInputBar/TextInputBar';
import {HideOnScroll} from '../Animations';
import {superHeroesCardStyles} from './superHeroesCardStyles';

interface superHeroesCardViewPropsTypes {
  superHeroesList: Hero[];
  numColumns: number;
  searchBarValue: string;
  scrollY: any;
  SearchBarHeight: number;
  onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onChangeSearchBar: (text: string) => void;
}

export const SuperHeroesCardView: React.FC<superHeroesCardViewPropsTypes> = ({
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
        <View style={superHeroesCardStyles.headerContainer}>
          <View style={superHeroesCardStyles.searchContainer}>
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
        renderItem={({item}) => <SuperHeroCard superHeroData={item} />}
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        style={superHeroesCardStyles.list}
      />
    </View>
  );
};
