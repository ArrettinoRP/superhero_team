import {combineReducers} from 'redux';
import {superHeroesReducer} from './superHeroesReducer';
import {superHeroesTeamReducer} from './superHeroesTeamReducer';

export const rootReducer = combineReducers({
  superHeroes: superHeroesReducer,
  superHeroesTeam: superHeroesTeamReducer,
});
