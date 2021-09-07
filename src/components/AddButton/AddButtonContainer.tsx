import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {AddButton} from './AddButton';
import {useDispatch} from 'react-redux';
import {
  ADD_SUPERHERO_BAD_TEAM,
  ADD_SUPERHERO_GOOD_TEAM,
} from '../../redux/actions/superHeroesTeamActionsTypes';
import {MainScreenProp} from '../../navigation';

interface AddButtonContainerPropsTypes {
  alignment: string;
  id: Number;
}

export const AddButtonContainer: React.FC<AddButtonContainerPropsTypes> = ({
  alignment,
  id,
}) => {
  const navigation = useNavigation<MainScreenProp>();
  const dispatch = useDispatch();
  const onPress = () => {
    if (alignment === 'bad') {
      dispatch({type: ADD_SUPERHERO_BAD_TEAM, payload: id});
    } else {
      dispatch({type: ADD_SUPERHERO_GOOD_TEAM, payload: id});
    }
    navigation.navigate('Home');
  };

  return <AddButton onPress={onPress} />;
};
