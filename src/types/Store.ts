import {Hero} from './Hero';

export interface Store {
  superHeroes: SuperHeroesStore;
  superHeroesTeam: SuperHeroesTeamStore;
}

export interface SuperHeroesTeamStore {
  badTeam: Hero[];
  goodTeam: Hero[];
}
export interface SuperHeroesStore {
  list: Hero[];
}
