import React from 'react';
import {View, Text} from 'react-native';
import {Hero, Powerstats} from '../../types';
import {PowerstatsCard} from '../SuperHero';
import {BodyConstitution} from './SuperHeroesTeamsContainer';
import {SuperHeroesTeamBodyConstitutionCard} from './SuperHeroesTeamBodyConstitutionCard/SuperHeroesTeamBodyConstitutionCard';
import {superHeroesTeamsStyles} from './superHeroesTeamsStyles';
import {SuperHeroesCardsList} from './SuperHeroesCardsList/SuperHeroesCardsList';
import {useTranslation} from 'react-i18next';

interface SuperHeroesTeamsPropsType {
  badTeamArray: Array<Hero | null>;
  goodTeamArray: Array<Hero | null>;
  goodTeamPowerstats: Powerstats;
  badTeamPowerstats: Powerstats;
  badTeamBodyConstitution: BodyConstitution;
  goodTeamBodyConstitution: BodyConstitution;
}

export const SuperHeroesTeams: React.FC<SuperHeroesTeamsPropsType> = ({
  badTeamArray,
  goodTeamArray,
  goodTeamPowerstats,
  badTeamPowerstats,
  badTeamBodyConstitution,
  goodTeamBodyConstitution,
}) => {
  const {t} = useTranslation();
  return (
    <View style={superHeroesTeamsStyles.superHeroesTeamContainer}>
      <View style={superHeroesTeamsStyles.teamContainer}>
        <Text style={superHeroesTeamsStyles.title}>{t('Good Team')}</Text>
        <View style={superHeroesTeamsStyles.goodTeamSuperHeroesCardContainer}>
          <SuperHeroesCardsList teamArray={goodTeamArray} />
        </View>
        <View style={superHeroesTeamsStyles.teamInformationContainer}>
          <View style={{flex: 1}}>
            <PowerstatsCard powerstats={goodTeamPowerstats} />
          </View>
          <View style={{flex: 1}}>
            <SuperHeroesTeamBodyConstitutionCard
              bodyConstitution={goodTeamBodyConstitution}
            />
          </View>
        </View>
      </View>
      <View style={superHeroesTeamsStyles.teamContainer}>
        <Text style={superHeroesTeamsStyles.title}>{t('Bad Team')}</Text>
        <View style={superHeroesTeamsStyles.badTeamSuperHeroesCardContainer}>
          <SuperHeroesCardsList teamArray={badTeamArray} />
        </View>
        <View style={superHeroesTeamsStyles.teamInformationContainer}>
          <View style={{flex: 1}}>
            <PowerstatsCard powerstats={badTeamPowerstats} />
          </View>
          <View style={{flex: 1}}>
            <SuperHeroesTeamBodyConstitutionCard
              bodyConstitution={badTeamBodyConstitution}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
