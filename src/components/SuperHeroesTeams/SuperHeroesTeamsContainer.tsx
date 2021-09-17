import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {SuperHeroesTeams} from './SuperHeroesTeams';
import {
  calculatePowerstatsAverage,
  calculateBodyConstitutionAverage,
} from './utils';
import {removeUnits} from './utils';
import {Hero, Powerstats, Store} from '../../types';
import {LoadingScreen} from '../../screens/Loading';
import {useTranslation} from 'react-i18next';

export interface BodyConstitution {
  weight: number;
  height: number;
}

export interface SuperHeroesTeam {
  title: string;
  superHeroesArray: Array<Hero | null>;
  powerstats: Powerstats;
  bodyConstitutionAverage: BodyConstitution;
}

export interface SuperHeroesTeamsObjectInterface {
  goodTeam: SuperHeroesTeam;
  badTeam: SuperHeroesTeam;
}

export const SuperHeroesTeamsContainer: React.FC = () => {
  const superHeroesTeamsStore = useSelector(
    (store: Store) => store.superHeroesTeam,
  );
  const [superHeroesTeamsObject, setSuperHeroesTeamsObject] = useState<
    SuperHeroesTeamsObjectInterface | undefined
  >();
  const {t} = useTranslation();

  const createTeamArray = (teamArray: Hero[]) => {
    let newTeamArray: Array<Hero | null> = [];
    newTeamArray.push.apply(newTeamArray, teamArray);
    for (let i = newTeamArray.length; i < 3; i++) {
      newTeamArray.push(null);
    }
    return newTeamArray;
  };

  const calculateTeamPowerstatsAverage = (teamArray: Hero[]) => {
    const teamPowerstatsArray = [];
    for (let key in teamArray) {
      teamPowerstatsArray.push(teamArray[key].powerstats);
    }
    const teamPowerstatsAverage =
      calculatePowerstatsAverage(teamPowerstatsArray);
    return teamPowerstatsAverage;
  };

  const calculateTeamBodyConstitutionAverage = (teamArray: Hero[]) => {
    const teamBodyConstitutionArray: BodyConstitution[] = [];
    for (let key in teamArray) {
      teamBodyConstitutionArray.push({
        weight: Number(removeUnits(teamArray[key].appearance.weight[1])),
        height: Number(removeUnits(teamArray[key].appearance.height[1])),
      });
    }
    const teamBodyConstitution = calculateBodyConstitutionAverage(
      teamBodyConstitutionArray,
    );

    return teamBodyConstitution;
  };

  const initTeams = () => {
    const goodTeamArray = createTeamArray(superHeroesTeamsStore.goodTeam);
    const badTeamArray = createTeamArray(superHeroesTeamsStore.badTeam);
    const goodTeamPowerstatsAverage = calculateTeamPowerstatsAverage(
      superHeroesTeamsStore.goodTeam,
    );
    const badTeamPowerstatsAverage = calculateTeamPowerstatsAverage(
      superHeroesTeamsStore.badTeam,
    );
    const goodTeamBodyConstitutionAverage =
      calculateTeamBodyConstitutionAverage(superHeroesTeamsStore.goodTeam);
    const badTeamBodyConstitutionAverage = calculateTeamBodyConstitutionAverage(
      superHeroesTeamsStore.badTeam,
    );
    setSuperHeroesTeamsObject({
      goodTeam: {
        title: t('Good Team'),
        superHeroesArray: goodTeamArray,
        powerstats: goodTeamPowerstatsAverage,
        bodyConstitutionAverage: goodTeamBodyConstitutionAverage,
      },
      badTeam: {
        title: t('Bad Team'),
        superHeroesArray: badTeamArray,
        powerstats: badTeamPowerstatsAverage,
        bodyConstitutionAverage: badTeamBodyConstitutionAverage,
      },
    });
  };

  useEffect(() => {
    initTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superHeroesTeamsStore]);

  if (!superHeroesTeamsObject) {
    return <LoadingScreen />;
  }
  return <SuperHeroesTeams superHeroesTeamsObject={superHeroesTeamsObject} />;
};
