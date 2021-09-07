import {Hero} from './Hero';

export interface Store {
  superHeroes: SuperHeroesStore;
  superHeroesTeam: superHeroesTeamStore;
}

export interface superHeroesTeamStore {
  badTeam: Object;
  goodTeam: Object;
}
export interface SuperHeroesStore {
  list: Hero[];
}
