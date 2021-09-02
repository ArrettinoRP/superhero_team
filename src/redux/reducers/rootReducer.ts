import {combineReducers} from 'redux';
import {superHeroesReducer} from './superHeroesReducer';

export const rootReducer = combineReducers({
  superHeroes: superHeroesReducer,
});
