import React from 'react';
import {SuperHeroScreen} from './SuperHeroScreen';
import {useRoute, RouteProp} from '@react-navigation/native';
import {LoggedInScreensParamsTypes} from '../../navigation';
import {useSelector} from 'react-redux';
import {Hero, Store} from '../../types';

export const SuperHeroContainer: React.FC = () => {
  const route = useRoute<RouteProp<LoggedInScreensParamsTypes, 'SuperHero'>>();
  const superHero: Hero = useSelector(
    (store: Store) =>
      store.superHeroes.list.filter(
        (hero: Hero) => hero.id === route.params.id,
      )[0],
  );

  const appearance = {
    height: superHero.appearance.height,
    weight: superHero.appearance.weight,
    eyeColor: superHero.appearance.eyeColor,
    hairColor: superHero.appearance.hairColor,
  };
  return <SuperHeroScreen appearance={appearance} superHero={superHero} />;
};
