import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {SuperHeroesTeam} from './SuperHeroesTeam';
import {
  calculatePowerstatsAverage,
  calculateBodyConstitutionAverage,
} from './utils';
import {removeUnits} from './utils';
import {Hero, Powerstats, Store} from '../../types';

export interface BodyConstitution {
  weight: number;
  height: number;
}

export const SuperHeroesTeamContainer: React.FC = () => {
  const superHeroesTeams = useSelector((store: Store) => store.superHeroesTeam);
  const [goodTeamArray, setGoodTeamArray] = useState<Array<Hero | null>>([]);
  const [badTeamArray, setBadTeamArray] = useState<Array<Hero | null>>([]);
  const [goodTeamPowerstats, setGoodTeamPowerstats] = useState<Powerstats>({
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,
  });

  const [badTeamPowerstats, setBadTeamPowerstats] = useState<Powerstats>({
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,
  });

  const [badTeamBodyConstitution, setBadTeamBodyConstitution] =
    useState<BodyConstitution>({weight: 0, height: 0});
  const [goodTeamBodyConstitution, setGoodTeamBodyConstitution] =
    useState<BodyConstitution>({weight: 0, height: 0});

  const createGoodTeamArray = (goodTeam: Hero[]) => {
    let newGoodTeamArray: Array<Hero | null> = [];
    newGoodTeamArray.push.apply(newGoodTeamArray, goodTeam);
    for (let i = newGoodTeamArray.length; i < 3; i++) {
      newGoodTeamArray.push(null);
    }
    setGoodTeamArray(newGoodTeamArray);
  };
  const createBadTeamArray = (badTeam: Hero[]) => {
    let newBadTeamArray: Array<Hero | null> = [];
    newBadTeamArray.push.apply(newBadTeamArray, badTeam);
    for (let i = newBadTeamArray.length; i < 3; i++) {
      newBadTeamArray.push(null);
    }
    setBadTeamArray(newBadTeamArray);
  };

  const calculateBadTeamPowerstatsAverage = () => {
    const badTeamPowerstatsArray = [];
    for (let key in superHeroesTeams.badTeam) {
      badTeamPowerstatsArray.push(superHeroesTeams.badTeam[key].powerstats);
    }
    const newBadTeamPowerstats = calculatePowerstatsAverage(
      badTeamPowerstatsArray,
    );
    setBadTeamPowerstats(newBadTeamPowerstats);
  };

  const calculateGoodTeamPowerstatsAverage = () => {
    const goodTeamPowerstatsArray = [];
    for (let key in superHeroesTeams.goodTeam) {
      goodTeamPowerstatsArray.push(superHeroesTeams.goodTeam[key].powerstats);
    }
    const newGoodTeamPowerstats = calculatePowerstatsAverage(
      goodTeamPowerstatsArray,
    );
    setGoodTeamPowerstats(newGoodTeamPowerstats);
  };

  const calculateGoodTeamBodyConstitutionAverage = () => {
    const goodTeamBodyConstitutionArray: BodyConstitution[] = [];
    for (let key in superHeroesTeams.goodTeam) {
      goodTeamBodyConstitutionArray.push({
        weight: Number(
          removeUnits(superHeroesTeams.goodTeam[key].appearance.weight[1]),
        ),
        height: Number(
          removeUnits(superHeroesTeams.goodTeam[key].appearance.height[1]),
        ),
      });
    }
    const newGoodTeamBodyConstitution = calculateBodyConstitutionAverage(
      goodTeamBodyConstitutionArray,
    );

    setGoodTeamBodyConstitution(newGoodTeamBodyConstitution);
  };

  const calculateBadTeamBodyConstitutionAverage = () => {
    const badTeamBodyConstitutionArray: BodyConstitution[] = [];

    for (let key in superHeroesTeams.badTeam) {
      badTeamBodyConstitutionArray.push({
        weight: Number(
          removeUnits(superHeroesTeams.badTeam[key].appearance.weight[1]),
        ),
        height: Number(
          removeUnits(superHeroesTeams.badTeam[key].appearance.height[1]),
        ),
      });
    }
    const newBadTeamBodyConstitution = calculateBodyConstitutionAverage(
      badTeamBodyConstitutionArray,
    );
    setBadTeamBodyConstitution(newBadTeamBodyConstitution);
  };

  useEffect(() => {
    createGoodTeamArray(superHeroesTeams.goodTeam);
    createBadTeamArray(superHeroesTeams.badTeam);
    calculateBadTeamPowerstatsAverage();
    calculateGoodTeamPowerstatsAverage();
    calculateGoodTeamBodyConstitutionAverage();
    calculateBadTeamBodyConstitutionAverage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superHeroesTeams]);

  return (
    <SuperHeroesTeam
      goodTeamArray={goodTeamArray}
      badTeamArray={badTeamArray}
      goodTeamPowerstats={goodTeamPowerstats}
      badTeamPowerstats={badTeamPowerstats}
      badTeamBodyConstitution={badTeamBodyConstitution}
      goodTeamBodyConstitution={goodTeamBodyConstitution}
    />
  );
};
