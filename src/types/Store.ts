import {Hero} from './Hero';

export interface Store {
  superHeroes: SuperHeroesStore;
}

export interface SuperHeroesStore {
  list: Hero[];
}
