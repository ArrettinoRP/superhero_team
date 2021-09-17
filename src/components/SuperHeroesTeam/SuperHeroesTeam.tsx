import React from 'react';
import {View, Text} from 'react-native';
import {Hero, Powerstats} from '../../types';
import {PowerstatsCard} from '../SuperHero';
import {BodyConstitution} from './SuperHeroesTeamContainer';
import {SuperHeroesTeamBodyConstitutionCard} from './SuperHeroesTeamBodyConstitutionCard/SuperHeroesTeamBodyConstitutionCard';
import {superHeroesTeamStyles} from './superHeroesTeamStyles';
import {SuperHeroesCardsList} from './SuperHeroesCardsList/SuperHeroesCardsList';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();
  return (
    <View style={superHeroesTeamStyles.superHeroesTeamContainer}>
      <View style={superHeroesTeamStyles.teamContainer}>
        <Text style={superHeroesTeamStyles.title}>{t('Good Team')}</Text>
        <View style={superHeroesTeamStyles.goodTeamSuperHeroesCardContainer}>
          <SuperHeroesCardsList teamArray={goodTeamArray} />
        </View>
        <View style={superHeroesTeamStyles.teamInformationContainer}>
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
      <View style={superHeroesTeamStyles.teamContainer}>
        <Text style={superHeroesTeamStyles.title}>{t('Bad Team')}</Text>
        <View style={superHeroesTeamStyles.badTeamSuperHeroesCardContainer}>
          <SuperHeroesCardsList teamArray={badTeamArray} />
        </View>
        <View style={superHeroesTeamStyles.teamInformationContainer}>
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
