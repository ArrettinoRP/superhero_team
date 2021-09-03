import React, {useState} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
} from 'react-native';
import {SuperHeroesCardView} from './SuperHeroesCardView';
import {
  superHeroCardImageWidth,
  superHeroCardImageMargin,
} from '../SuperHeroCard/superHeroCardStyles';
import {useSuperHeroesListFiltered} from './hooks/useSuperHeroesListFiltered';

const windowWidth = Dimensions.get('window').width;

export const SuperHeroesCardViewContainer = () => {
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
    windowWidth / (superHeroCardImageWidth + superHeroCardImageMargin * 2),
  );
  return (
    <SuperHeroesCardView
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
