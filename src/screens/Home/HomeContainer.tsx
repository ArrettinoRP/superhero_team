import React from 'react';
import {useSelector} from 'react-redux';
import {Store} from '../../types';
import {HomeScreen} from './HomeScreen';

export const HomeContainer: React.FC = () => {
  const st = useSelector((store: Store) => store.superHeroesTeam.goodTeam);
  console.log(st);
  return <HomeScreen />;
};
