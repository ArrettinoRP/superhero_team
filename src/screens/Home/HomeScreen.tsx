import React from 'react';
import {View} from 'react-native';
import {SuperHeroesCardView} from '../../components/SuperHeroesCardView/SuperHeroesCardView';
import {Hero} from '../../types';
import {homeScreenStyles} from './homeScreenStyles';

interface HomeScreenPropsTypes {
  superHeroesList: Hero[];
}

export const HomeScreen: React.FC<HomeScreenPropsTypes> = ({
  superHeroesList,
}) => {
  return (
    <>
      <View style={homeScreenStyles.superHeroesCardViewContainer}>
        <SuperHeroesCardView superHeroesList={superHeroesList} />
      </View>
    </>
  );
};
