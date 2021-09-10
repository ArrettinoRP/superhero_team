import {LOG_IN, LOG_OUT} from '../actions/authActionsTypes';

export const authReducer = (
  state: any = {loggedIn: false},
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case LOG_IN:
      return {...state, loggedIn: true};
    case LOG_OUT:
      return {...state, loggedIn: false};
    default:
      return state;
  }
};
