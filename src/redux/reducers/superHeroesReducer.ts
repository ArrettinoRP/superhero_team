import {ADD_SUPERHEROES_LIST} from '../actions/superHeroesActionsTypes';

export const superHeroesReducer = (
  state: any = {},
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case ADD_SUPERHEROES_LIST:
      return {...state, list: action.payload};
    default:
      return state;
  }
};
