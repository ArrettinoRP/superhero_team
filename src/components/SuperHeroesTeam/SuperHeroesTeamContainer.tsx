import React, {useEffect, useState} from 'react';
import {SuperHeroesTeam} from './SuperHeroesTeam';
import {calculateTeamPowerstatsAverage} from './utils/calculateTeamPowerstatsAverage';
import {Hero, Powerstats, SuperHeroesTeamStore} from '../../types';

interface SuperHeroesContainerPropsTypes {
  superHeroesTeams: SuperHeroesTeamStore;
}

export const SuperHeroesTeamContainer: React.FC<SuperHeroesContainerPropsTypes> =
  ({superHeroesTeams}) => {
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
      const newBadTeamPowerstats = calculateTeamPowerstatsAverage(
        badTeamPowerstatsArray,
      );
      setBadTeamPowerstats(newBadTeamPowerstats);
    };

    const calculateGoodTeamPowerstatsAverage = () => {
      const goodTeamPowerstatsArray = [];
      for (let key in superHeroesTeams.goodTeam) {
        goodTeamPowerstatsArray.push(superHeroesTeams.goodTeam[key].powerstats);
      }
      const newGoodTeamPowerstats = calculateTeamPowerstatsAverage(
        goodTeamPowerstatsArray,
      );
      setBadTeamPowerstats(newGoodTeamPowerstats);
    };

    useEffect(() => {
      createGoodTeamArray(superHeroesTeams.goodTeam);
      createBadTeamArray(superHeroesTeams.badTeam);
      calculateBadTeamPowerstatsAverage();
      calculateGoodTeamPowerstatsAverage();
    }, [superHeroesTeams]);

    return (
      <SuperHeroesTeam
        goodTeamArray={goodTeamArray}
        badTeamArray={badTeamArray}
        goodTeamPowerstats={goodTeamPowerstats}
        badTeamPowerstats={badTeamPowerstats}
      />
    );
  };
