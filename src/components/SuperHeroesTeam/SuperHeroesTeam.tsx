import React from 'react';
import {View} from 'react-native';
import {SuperHeroesTeamCard} from './SuperHeroesTeamCard/SuperHeroesTeamCard';
import {SuperHeroesTeamStore} from '../../types';

interface SuperHeroesTeamPropsType {
  superHeroesTeams: SuperHeroesTeamStore;
}

export const SuperHeroesTeam: React.FC<SuperHeroesTeamPropsType> = ({
  superHeroesTeams,
}) => {
  return (
    <View>
      {superHeroesTeams.goodTeam.map((item, index) => (
        <SuperHeroesTeamCard
          name={item.name}
          index={index}
          alignment={item.biography.alignment}
          imageUrl={item.images.md}
        />
      ))}
      {superHeroesTeams.badTeam.map((item, index) => (
        <SuperHeroesTeamCard
          name={item.name}
          index={index}
          alignment={item.biography.alignment}
          imageUrl={item.images.md}
        />
      ))}
    </View>
  );
};
