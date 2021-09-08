import React from 'react';
import {RemoveButton} from './RemoveButton';
import {
  REMOVE_SUPERHERO_BAD_TEAM,
  REMOVE_SUPERHERO_GOOD_TEAM,
} from '../../redux/actions/superHeroesTeamActionsTypes';
import {useDispatch} from 'react-redux';

interface RemoveButtonContainerPropsType {
  index: number;
  alignment: string;
}

export const RemoveButtonContainer: React.FC<RemoveButtonContainerPropsType> =
  ({index, alignment}) => {
    const dispatch = useDispatch();
    const onPress = () => {
      if (alignment === 'bad') {
        dispatch({type: REMOVE_SUPERHERO_BAD_TEAM, payload: index});
      } else {
        dispatch({type: REMOVE_SUPERHERO_GOOD_TEAM, payload: index});
      }
    };
    return <RemoveButton onPress={onPress} />;
  };
