import {combineReducers} from 'redux';
import {superHeroesReducer} from './superHeroesReducer';
import {superHeroesTeamReducer} from './superHeroesTeamReducer';
import {authReducer} from './authReducer';

export const rootReducer = combineReducers({
  superHeroes: superHeroesReducer,
  superHeroesTeam: superHeroesTeamReducer,
  auth: authReducer,
});
