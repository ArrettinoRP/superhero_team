import {
  ADD_SUPERHERO_GOOD_TEAM,
  ADD_SUPERHERO_BAD_TEAM,
  REMOVE_SUPERHERO_BAD_TEAM,
  REMOVE_SUPERHERO_GOOD_TEAM,
} from '../actions/superHeroesTeamActionsTypes';

export const superHeroesTeamReducer = (
  state: any = {goodTeam: [], badTeam: []},
  action: {type: any; payload: any},
) => {
  let newBadTeam;
  let newGoodTeam;
  switch (action.type) {
    case ADD_SUPERHERO_GOOD_TEAM:
      newGoodTeam = [action.payload];
      newGoodTeam.push.apply(newGoodTeam, state.goodTeam);
      return {...state, goodTeam: newGoodTeam};
    case ADD_SUPERHERO_BAD_TEAM:
      newBadTeam = [action.payload];
      newBadTeam.push.apply(newBadTeam, state.badTeam);
      return {...state, badTeam: newBadTeam};
    case REMOVE_SUPERHERO_BAD_TEAM:
      newBadTeam = state.badTeam;
      newBadTeam.splice(action.payload, 1);
      return {...state, badTeam: newBadTeam};
    case REMOVE_SUPERHERO_GOOD_TEAM:
      newGoodTeam = state.goodTeam;
      newGoodTeam.splice(action.payload, 1);
      return {...state, goodTeam: newGoodTeam};
    default:
      return state;
  }
};
