import React from 'react';
import {View, ScrollView} from 'react-native';
import {SuperHeroesTeamContainer} from '../../components/SuperHeroesTeam/SuperHeroesTeamContainer';

export const HomeScreen: React.FC = () => {
  return (
    <View>
      <ScrollView>
        <SuperHeroesTeamContainer />
      </ScrollView>
    </View>
  );
};
