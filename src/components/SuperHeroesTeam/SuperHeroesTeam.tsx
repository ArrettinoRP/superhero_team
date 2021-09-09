import React from 'react';
import {View} from 'react-native';
import {Hero, Powerstats} from '../../types';
import {SuperHeroesTeamCardContainer} from './SuperHeroesTeamCard/SuperHeroesTeamCardContainer';
import {AddSuperHeroesTeamCardContainer} from './AddSuperHeroesTeamCard/AddSuperHeroesTeamCardContainer';
import {PowerstatsCard} from '../SuperHero';
import {BodyConstitution} from './SuperHeroesTeamContainer';
import {SuperHeroesTeamBodyConstitutionCard} from './SuperHeroesTeamBodyConstitutionCard/SuperHeroesTeamBodyConstitutionCard';

interface SuperHeroesTeamPropsType {
  badTeamArray: Array<Hero | null>;
  goodTeamArray: Array<Hero | null>;
  goodTeamPowerstats: Powerstats;
  badTeamPowerstats: Powerstats;
  badTeamBodyConstitution: BodyConstitution;
  goodTeamBodyConstitution: BodyConstitution;
}

export const SuperHeroesTeam: React.FC<SuperHeroesTeamPropsType> = ({
  badTeamArray,
  goodTeamArray,
  goodTeamPowerstats,
  badTeamPowerstats,
  badTeamBodyConstitution,
  goodTeamBodyConstitution,
}) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'blue', alignItems: 'center'}}>
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
          </View>
          <View style={{alignItems: 'center'}}>
            <PowerstatsCard powerstats={goodTeamPowerstats} />
            <SuperHeroesTeamBodyConstitutionCard
              bodyConstitution={goodTeamBodyConstitution}
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: 'red', alignItems: 'center'}}>
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
          <View style={{alignItems: 'center'}}>
            <PowerstatsCard powerstats={badTeamPowerstats} />
            <SuperHeroesTeamBodyConstitutionCard
              bodyConstitution={badTeamBodyConstitution}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
