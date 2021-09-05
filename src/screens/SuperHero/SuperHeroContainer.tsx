import React from 'react';
import {SuperHeroScreen} from './SuperHeroScreen';
import {useRoute, RouteProp} from '@react-navigation/native';
import {StackScreensListTypes} from '../../navigation';
import {useSelector} from 'react-redux';
import {Hero, Store} from '../../types';

export const SuperHeroContainer: React.FC = () => {
  const route = useRoute<RouteProp<StackScreensListTypes, 'SuperHero'>>();
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
  return (
    <SuperHeroScreen
      name={superHero.name}
      aliases={superHero.biography.aliases}
      image={superHero.images.sm}
      appearance={appearance}
      race={superHero.appearance.race}
      gender={superHero.appearance.gender}
      work={superHero.work}
      powerstats={superHero.powerstats}
      connections={superHero.connections}
      biography={superHero.biography}
    />
  );
};
