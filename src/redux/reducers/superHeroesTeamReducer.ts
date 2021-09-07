import {
  ADD_SUPERHERO_GOOD_TEAM,
  ADD_SUPERHERO_BAD_TEAM,
} from '../actions/superHeroesTeamActionsTypes';

export const superHeroesTeamReducer = (
  state: any = {goodTeam: [], badTeam: []},
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case ADD_SUPERHERO_GOOD_TEAM:
      const newGoodTeam = [action.payload];
      newGoodTeam.push.apply(newGoodTeam, state.goodTeam);
      return {...state, goodTeam: newGoodTeam};

    case ADD_SUPERHERO_BAD_TEAM:
      const newBadTeam = [action.payload];
      newBadTeam.push.apply(newBadTeam, state.badTeam);
      return {...state, badTeam: newBadTeam};

    default:
      return state;
  }
};
