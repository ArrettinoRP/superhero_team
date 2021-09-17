import React from 'react';
import {View, Text} from 'react-native';
import {PowerstatsCard} from '../SuperHero';
import {
  SuperHeroesTeamsObjectInterface,
  SuperHeroesTeam,
} from './SuperHeroesTeamsContainer';
import {BodyConstitutionCard} from './BodyConstitutionCard/BodyConstitutionCard';
import {superHeroesTeamsStyles} from './superHeroesTeamsStyles';
import {SuperHeroesCardsList} from './SuperHeroesCardsList/SuperHeroesCardsList';

interface SuperHeroesTeamsPropsType {
  superHeroesTeamsObject: SuperHeroesTeamsObjectInterface;
}

export const SuperHeroesTeams: React.FC<SuperHeroesTeamsPropsType> = ({
  superHeroesTeamsObject,
}) => {
  return (
    <View style={superHeroesTeamsStyles.superHeroesTeamContainer}>
      {Object.values(superHeroesTeamsObject).map(
        (team: SuperHeroesTeam, index) => (
          <View key={index} style={superHeroesTeamsStyles.teamContainer}>
            <Text style={superHeroesTeamsStyles.title}>{team.title}</Text>
            <View
              style={superHeroesTeamsStyles.goodTeamSuperHeroesCardContainer}>
              <SuperHeroesCardsList teamArray={team.superHeroesArray} />
            </View>
            <View style={superHeroesTeamsStyles.teamInformationContainer}>
              <View style={superHeroesTeamsStyles.powerstatsCardContainer}>
                <PowerstatsCard powerstats={team.powerstats} />
              </View>
              <View
                style={superHeroesTeamsStyles.bodyConstitutionCardContainer}>
                <BodyConstitutionCard
                  bodyConstitution={team.bodyConstitutionAverage}
                />
              </View>
            </View>
          </View>
        ),
      )}
    </View>
  );
};
