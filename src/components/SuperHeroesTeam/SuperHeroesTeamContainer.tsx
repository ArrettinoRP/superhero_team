import React, {useEffect, useState} from 'react';
import {SuperHeroesTeam} from './SuperHeroesTeam';
import {Hero, SuperHeroesTeamStore} from '../../types';

interface SuperHeroesContainerPropsTypes {
  superHeroesTeams: SuperHeroesTeamStore;
}

export const SuperHeroesTeamContainer: React.FC<SuperHeroesContainerPropsTypes> =
  ({superHeroesTeams}) => {
    const [goodTeamArray, setGoodTeamArray] = useState<Array<Hero | null>>([]);
    const [badTeamArray, setBadTeamArray] = useState<Array<Hero | null>>([]);

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

    useEffect(() => {
      createGoodTeamArray(superHeroesTeams.goodTeam);
      createBadTeamArray(superHeroesTeams.badTeam);
    }, [superHeroesTeams]);

    return (
      <SuperHeroesTeam
        goodTeamArray={goodTeamArray}
        badTeamArray={badTeamArray}
      />
    );
  };
