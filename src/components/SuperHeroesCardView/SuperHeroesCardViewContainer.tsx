import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
} from 'react-native';
import {SuperHeroesCardView} from './SuperHeroesCardView';
import {superHeroCardImageWidth} from '../SuperHeroCard/superHeroCardStyles';
import {Hero, Store} from '../../types';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

export const SuperHeroesCardViewContainer = () => {
  const [superHeroesListFiltered, setSuperHeroesListFiltered] = useState<
    Hero[]
  >([]);
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const scrollY = new Animated.Value(0);
  const SearchBarHeight = 90;

  const superHeroesList: Hero[] = useSelector(
    (state: Store) => state.superHeroes.list,
  );

  const onChangeSearchBar = (text: string) => {
    setSearchBarValue(text);
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  useEffect(() => {
    setSuperHeroesListFiltered(superHeroesList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchBarValue === '') {
      setSuperHeroesListFiltered(superHeroesList);
    } else {
      const newSuperHeroesListFiltered: Hero[] = superHeroesList.filter(
        (hero: Hero) => {
          const heroNameUpperCase: string = hero.name.toUpperCase();
          const searchBarValueUpperCase: string = searchBarValue.toUpperCase();
          return heroNameUpperCase.includes(searchBarValueUpperCase);
        },
      );
      setSuperHeroesListFiltered(newSuperHeroesListFiltered);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBarValue]);

  const numColumns = Math.trunc(windowWidth / superHeroCardImageWidth);
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
