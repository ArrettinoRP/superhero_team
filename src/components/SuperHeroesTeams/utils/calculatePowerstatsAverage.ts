import {Powerstats} from '../../../types';
export const calculatePowerstatsAverage = (PowerstatsArray: Powerstats[]) => {
  const newTeamPowerstats: Powerstats = {
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,
  };
  const arrayLength = PowerstatsArray.length;
  if (arrayLength !== 0) {
    for (let key in PowerstatsArray) {
      newTeamPowerstats.combat += PowerstatsArray[key].combat;
      newTeamPowerstats.durability += PowerstatsArray[key].durability;
      newTeamPowerstats.intelligence += PowerstatsArray[key].intelligence;
      newTeamPowerstats.power += PowerstatsArray[key].power;
      newTeamPowerstats.speed += PowerstatsArray[key].speed;
      newTeamPowerstats.strength += PowerstatsArray[key].strength;
    }
    newTeamPowerstats.combat = Math.trunc(
      newTeamPowerstats.combat / arrayLength,
    );
    newTeamPowerstats.durability = Math.trunc(
      newTeamPowerstats.durability / arrayLength,
    );
    newTeamPowerstats.intelligence = Math.trunc(
      newTeamPowerstats.intelligence / arrayLength,
    );
    newTeamPowerstats.power = Math.trunc(newTeamPowerstats.power / arrayLength);
    newTeamPowerstats.speed = Math.trunc(newTeamPowerstats.speed / arrayLength);
    newTeamPowerstats.strength = Math.trunc(
      newTeamPowerstats.strength / arrayLength,
    );
  }
  return newTeamPowerstats;
};
