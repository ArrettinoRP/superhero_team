import React from 'react';
import {View} from 'react-native';
import {SuperHeroesCardViewContainer} from '../../components';
import {homeScreenStyles} from './homeScreenStyles';

export const HomeScreen: React.FC = () => {
  return (
    <View style={homeScreenStyles.superHeroesCardViewContainer}>
      <SuperHeroesCardViewContainer />
    </View>
  );
};
