import React from 'react';
import {Text} from 'react-native';
import {Hero} from '../../types';

interface HomeScreenPropsTypes {
  superHeroesList: Hero[];
}

export const HomeScreen: React.FC<HomeScreenPropsTypes> = ({
  superHeroesList,
}) => {
  return (
    <>
      <Text>Home</Text>
    </>
  );
};
