import {EDIT_LOGGED_IN} from '../actions/authActionsTypes';

export const authReducer = (
  state: any = {loggedIn: false},
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case EDIT_LOGGED_IN:
      return {...state, loggedIn: action.payload};
    default:
      return state;
  }
};
