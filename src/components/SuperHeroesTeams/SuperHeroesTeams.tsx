import React from 'react';
import {View, Text} from 'react-native';
import {PowerstatsCard} from '../SuperHero';
import {SuperHeroesTeamsObjectInterface} from './SuperHeroesTeamsContainer';
import {SuperHeroesTeamBodyConstitutionCard} from './SuperHeroesTeamBodyConstitutionCard/SuperHeroesTeamBodyConstitutionCard';
import {superHeroesTeamsStyles} from './superHeroesTeamsStyles';
import {SuperHeroesCardsList} from './SuperHeroesCardsList/SuperHeroesCardsList';
import {useTranslation} from 'react-i18next';

interface SuperHeroesTeamsPropsType {
  superHeroesTeamsObject: SuperHeroesTeamsObjectInterface;
}

export const SuperHeroesTeams: React.FC<SuperHeroesTeamsPropsType> = ({
  superHeroesTeamsObject,
}) => {
  const {t} = useTranslation();
  return (
    <View style={superHeroesTeamsStyles.superHeroesTeamContainer}>
      <View style={superHeroesTeamsStyles.teamContainer}>
        <Text style={superHeroesTeamsStyles.title}>{t('Good Team')}</Text>
        <View style={superHeroesTeamsStyles.goodTeamSuperHeroesCardContainer}>
          <SuperHeroesCardsList
            teamArray={superHeroesTeamsObject.goodTeam.superHeroesArray}
          />
        </View>
        <View style={superHeroesTeamsStyles.teamInformationContainer}>
          <View style={{flex: 1}}>
            <PowerstatsCard
              powerstats={superHeroesTeamsObject.goodTeam.powerstats}
            />
          </View>
          <View style={{flex: 1}}>
            <SuperHeroesTeamBodyConstitutionCard
              bodyConstitution={
                superHeroesTeamsObject.goodTeam.bodyConstitutionAverage
              }
            />
          </View>
        </View>
      </View>
      <View style={superHeroesTeamsStyles.teamContainer}>
        <Text style={superHeroesTeamsStyles.title}>{t('Bad Team')}</Text>
        <View style={superHeroesTeamsStyles.badTeamSuperHeroesCardContainer}>
          <SuperHeroesCardsList
            teamArray={superHeroesTeamsObject.badTeam.superHeroesArray}
          />
        </View>
        <View style={superHeroesTeamsStyles.teamInformationContainer}>
          <View style={{flex: 1}}>
            <PowerstatsCard
              powerstats={superHeroesTeamsObject.badTeam.powerstats}
            />
          </View>
          <View style={{flex: 1}}>
            <SuperHeroesTeamBodyConstitutionCard
              bodyConstitution={
                superHeroesTeamsObject.badTeam.bodyConstitutionAverage
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};
