import React, {useState} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
} from 'react-native';
import {SuperHeroesList} from './SuperHeroesList';
import {
  superHeroListCardWidth,
  superHeroListCardMargin,
} from '../SuperHeroesListCard/superHeroListCardStyles';
import {useSuperHeroesListFiltered} from './hooks/useSuperHeroesListFiltered';

const windowWidth = Dimensions.get('window').width;

export const SuperHeroesListContainer = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const scrollY = new Animated.Value(0);
  const SearchBarHeight = 90;
  const superHeroesListFiltered = useSuperHeroesListFiltered({
    searchBarValue,
  });

  const onChangeSearchBar = (text: string) => {
    setSearchBarValue(text);
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  const numColumns = Math.trunc(
    windowWidth / (superHeroListCardWidth + superHeroListCardMargin * 2),
  );
  return (
    <SuperHeroesList
      superHeroesList={superHeroesListFiltered}
      numColumns={numColumns}
      searchBarValue={searchBarValue}
      onChangeSearchBar={onChangeSearchBar}
      scrollY={scrollY}
      onScroll={onScroll}
      SearchBarHeight={SearchBarHeight}
    />
  );
};
