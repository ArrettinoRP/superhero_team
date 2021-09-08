import {
  ADD_SUPERHERO_GOOD_TEAM,
  ADD_SUPERHERO_BAD_TEAM,
  REMOVE_SUPERHERO_BAD_TEAM,
  REMOVE_SUPERHERO_GOOD_TEAM,
} from '../actions/superHeroesTeamActionsTypes';

export const superHeroesTeamReducer = (
  state: any = {
    goodTeam: [],
    badTeam: [],
    teamFull: {goodTeam: false, badTeam: false},
  },
  action: {type: any; payload: any},
) => {
  let newBadTeam;
  let newGoodTeam;
  switch (action.type) {
    case ADD_SUPERHERO_GOOD_TEAM:
      newGoodTeam = [action.payload];
      newGoodTeam.push.apply(newGoodTeam, state.goodTeam);
      if (newGoodTeam.length === 3) {
        return {
          ...state,
          teamFull: {goodTeam: true, badTeam: state.teamFull.badTeam},
          goodTeam: newGoodTeam,
        };
      }
      return {...state, goodTeam: newGoodTeam};
    case ADD_SUPERHERO_BAD_TEAM:
      newBadTeam = [action.payload];
      newBadTeam.push.apply(newBadTeam, state.badTeam);
      if (newBadTeam.length === 3) {
        return {
          ...state,
          teamFull: {badTeam: true, goodTeam: state.teamFull.goodTeam},
          badTeam: newBadTeam,
        };
      }
      return {...state, badTeam: newBadTeam};
    case REMOVE_SUPERHERO_BAD_TEAM:
      newBadTeam = state.badTeam;
      newBadTeam.splice(action.payload, 1);
      return {
        ...state,
        teamFull: {badTeam: false, goodTeam: state.teamFull.goodTeam},
        badTeam: newBadTeam,
      };
    case REMOVE_SUPERHERO_GOOD_TEAM:
      newGoodTeam = state.goodTeam;
      newGoodTeam.splice(action.payload, 1);
      return {
        ...state,
        teamFull: {goodTeam: false, badTeam: state.teamFull.badTeam},
        goodTeam: newGoodTeam,
      };
    default:
      return state;
  }
};
