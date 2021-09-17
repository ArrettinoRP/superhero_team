import React from 'react';
import {View, ScrollView} from 'react-native';
import {SuperHeroesTeamsContainer} from '../../components/SuperHeroesTeams/SuperHeroesTeamsContainer';

export const HomeScreen: React.FC = () => {
  return (
    <View>
      <ScrollView>
        <SuperHeroesTeamsContainer />
      </ScrollView>
    </View>
  );
};
