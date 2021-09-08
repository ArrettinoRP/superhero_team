import React from 'react';
import {View, Text} from 'react-native';
import {SuperHeroesTeamStore} from '../../types';
import {SuperHeroesTeam} from '../../components/SuperHeroesTeam/SuperHeroesTeam';

interface HomeScreenPropsTypes {
  superHeroesTeams: SuperHeroesTeamStore;
}

export const HomeScreen: React.FC<HomeScreenPropsTypes> = ({
  superHeroesTeams,
}) => {
  return (
    <View>
      <SuperHeroesTeam superHeroesTeams={superHeroesTeams} />
      <Text>Home</Text>
    </View>
  );
};
