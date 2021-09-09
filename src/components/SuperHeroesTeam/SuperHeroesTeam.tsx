import React from 'react';
import {View} from 'react-native';
import {Hero} from '../../types';
import {SuperHeroesTeamCardContainer} from './SuperHeroesTeamCard/SuperHeroesTeamCardContainer';
import {AddSuperHeroesTeamCardContainer} from './AddSuperHeroesTeamCard/AddSuperHeroesTeamCardContainer';

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
          return <AddSuperHeroesTeamCardContainer />;
        }
        return (
          <SuperHeroesTeamCardContainer
            name={item.name}
            index={index}
            alignment={item.biography.alignment}
            imageUrl={item.images.md}
            id={item.id}
          />
        );
      })}
      {badTeamArray.map((item, index) => {
        if (!item) {
          return <AddSuperHeroesTeamCardContainer />;
        }
        return (
          <SuperHeroesTeamCardContainer
            name={item.name}
            index={index}
            alignment={item.biography.alignment}
            imageUrl={item.images.md}
            id={item.id}
          />
        );
      })}
    </View>
  );
};
