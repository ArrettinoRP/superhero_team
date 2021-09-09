import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SuperHeroesTeamStore} from '../../types';
import {SuperHeroesTeamContainer} from '../../components/SuperHeroesTeam/SuperHeroesTeamContainer';

interface HomeScreenPropsTypes {
  superHeroesTeams: SuperHeroesTeamStore;
}

export const HomeScreen: React.FC<HomeScreenPropsTypes> = ({
  superHeroesTeams,
}) => {
  return (
    <View>
      <ScrollView>
        <SuperHeroesTeamContainer superHeroesTeams={superHeroesTeams} />
        <Text>Home</Text>
      </ScrollView>
    </View>
  );
};
