import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {AddButton} from './AddButton';
import {useDispatch} from 'react-redux';
import {
  ADD_SUPERHERO_BAD_TEAM,
  ADD_SUPERHERO_GOOD_TEAM,
} from '../../redux/actions/superHeroesTeamActionsTypes';
import {MainScreenProp} from '../../navigation';
import {Hero} from '../../types';

interface AddButtonContainerPropsTypes {
  superHero: Hero;
}

export const AddButtonContainer: React.FC<AddButtonContainerPropsTypes> = ({
  superHero,
}) => {
  const navigation = useNavigation<MainScreenProp>();
  const dispatch = useDispatch();
  const onPress = () => {
    if (superHero.biography.alignment === 'bad') {
      dispatch({type: ADD_SUPERHERO_BAD_TEAM, payload: superHero});
    } else {
      dispatch({type: ADD_SUPERHERO_GOOD_TEAM, payload: superHero});
    }
    navigation.navigate('Home');
  };

  return <AddButton onPress={onPress} />;
};
