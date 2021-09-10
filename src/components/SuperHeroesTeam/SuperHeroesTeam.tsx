import React from 'react';
import {View} from 'react-native';
import {Hero, Powerstats} from '../../types';
import {PowerstatsCard} from '../SuperHero';
import {BodyConstitution} from './SuperHeroesTeamContainer';
import {SuperHeroesTeamBodyConstitutionCard} from './SuperHeroesTeamBodyConstitutionCard/SuperHeroesTeamBodyConstitutionCard';
import {superHeroesTeamStyles} from './superHeroesTeamStyles';
import {SuperHeroesCardsList} from './SuperHeroesCardsList/SuperHeroesCardsList';

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
    <View style={superHeroesTeamStyles.superHeroesTeamContainer}>
      <View style={superHeroesTeamStyles.teamContainer}>
        <View style={superHeroesTeamStyles.goodTeamSuperHeroesCardContainer}>
          <SuperHeroesCardsList teamArray={goodTeamArray} />
        </View>
        <View style={superHeroesTeamStyles.teamInformationContainer}>
          <PowerstatsCard powerstats={goodTeamPowerstats} />
          <SuperHeroesTeamBodyConstitutionCard
            bodyConstitution={goodTeamBodyConstitution}
          />
        </View>
      </View>
      <View style={superHeroesTeamStyles.teamContainer}>
        <View style={superHeroesTeamStyles.badTeamSuperHeroesCardContainer}>
          <SuperHeroesCardsList teamArray={badTeamArray} />
        </View>
        <View style={superHeroesTeamStyles.teamInformationContainer}>
          <PowerstatsCard powerstats={badTeamPowerstats} />
          <SuperHeroesTeamBodyConstitutionCard
            bodyConstitution={badTeamBodyConstitution}
          />
        </View>
      </View>
    </View>
  );
};
