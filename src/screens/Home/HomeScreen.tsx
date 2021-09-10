import React from 'react';
import {View, ScrollView} from 'react-native';
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
        <SuperHeroesTeamContainer key={1} superHeroesTeams={superHeroesTeams} />
      </ScrollView>
    </View>
  );
};
