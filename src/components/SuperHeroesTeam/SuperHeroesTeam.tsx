import React from 'react';
import {View} from 'react-native';
import {SuperHeroesTeamCard} from './SuperHeroesTeamCard/SuperHeroesTeamCard';
import {AddSuperHeroesTeamCard} from './AddSuperHeroesTeamCard/AddSuperHeroesTeamCard';
import {Hero} from '../../types';

interface SuperHeroesTeamPropsType {
  badTeamArray: Array<Hero | null>;
  goodTeamArray: Array<Hero | null>;
}

export const SuperHeroesTeam: React.FC<SuperHeroesTeamPropsType> = ({
  badTeamArray,
  goodTeamArray,
}) => {
  return (
    <View>
      {goodTeamArray.map((item, index) => {
        if (!item) {
          return <AddSuperHeroesTeamCard />;
        }
        return (
          <SuperHeroesTeamCard
            name={item.name}
            index={index}
            alignment={item.biography.alignment}
            imageUrl={item.images.md}
          />
        );
      })}
      {badTeamArray.map((item, index) => {
        if (!item) {
          return <AddSuperHeroesTeamCard />;
        }
        return (
          <SuperHeroesTeamCard
            name={item.name}
            index={index}
            alignment={item.biography.alignment}
            imageUrl={item.images.md}
          />
        );
      })}
    </View>
  );
};
