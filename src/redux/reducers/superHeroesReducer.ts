export const superHeroesReducer = (
  state: any = {},
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case 'ADD_SUPERHERO_LIST':
      return {...state, list: action.payload};
    default:
      return state;
  }
};
