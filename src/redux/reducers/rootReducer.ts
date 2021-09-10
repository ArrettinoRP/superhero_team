import {combineReducers} from 'redux';
import {superHeroesReducer} from './superHeroesReducer';
import {superHeroesTeamReducer} from './superHeroesTeamReducer';
import {authReducer} from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  superHeroes: superHeroesReducer,
  superHeroesTeam: superHeroesTeamReducer,
  auth: persistReducer(persistConfig, authReducer),
});
