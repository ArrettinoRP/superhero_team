import {Hero} from './Hero';

export interface Store {
  superHeroes: SuperHeroesStore;
  superHeroesTeam: SuperHeroesTeamStore;
  auth: authStore;
}

export interface SuperHeroesTeamStore {
  badTeam: Hero[];
  goodTeam: Hero[];
  teamFull: TeamFull;
}

export interface TeamFull {
  goodTeam: boolean;
  badTeam: boolean;
}
export interface SuperHeroesStore {
  list: Hero[];
}

export interface authStore {
  loggedIn: boolean;
}
