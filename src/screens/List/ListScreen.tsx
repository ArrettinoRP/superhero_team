import React from 'react';
import {View} from 'react-native';
import {SuperHeroesListContainer} from '../../components';
import {listStyles} from './listScreenStyles';

export const ListScreen: React.FC = () => {
  return (
    <View style={listStyles.superHeroesCardViewContainer}>
      <SuperHeroesListContainer />
    </View>
  );
};
