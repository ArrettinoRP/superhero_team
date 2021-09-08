import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {AddButton} from './AddButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  ADD_SUPERHERO_BAD_TEAM,
  ADD_SUPERHERO_GOOD_TEAM,
} from '../../redux/actions/superHeroesTeamActionsTypes';
import {MainScreenProp} from '../../navigation';
import {Hero, Store} from '../../types';
import {View} from 'react-native';

interface AddButtonContainerPropsTypes {
  superHero: Hero;
}

export const AddButtonContainer: React.FC<AddButtonContainerPropsTypes> = ({
  superHero,
}) => {
  const navigation = useNavigation<MainScreenProp>();
  const teamFull = useSelector(
    (state: Store) => state.superHeroesTeam.teamFull,
  );
  const dispatch = useDispatch();
  const onPress = () => {
    if (superHero.biography.alignment === 'bad') {
      dispatch({type: ADD_SUPERHERO_BAD_TEAM, payload: superHero});
    } else {
      dispatch({type: ADD_SUPERHERO_GOOD_TEAM, payload: superHero});
    }
    navigation.navigate('Home');
  };
  if (
    (teamFull.goodTeam === false && superHero.biography.alignment === 'good') ||
    (teamFull.badTeam === false && superHero.biography.alignment === 'bad')
  ) {
    return <AddButton onPress={onPress} />;
  }
  return <View />;
};
