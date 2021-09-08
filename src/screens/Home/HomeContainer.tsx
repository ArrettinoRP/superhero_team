import React from 'react';
import {useSelector} from 'react-redux';
import {Store} from '../../types';
import {HomeScreen} from './HomeScreen';

export const HomeContainer: React.FC = () => {
  const superHeroesTeams = useSelector((store: Store) => store.superHeroesTeam);
  return <HomeScreen superHeroesTeams={superHeroesTeams} />;
};
