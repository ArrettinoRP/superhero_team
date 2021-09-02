import React from 'react';
import {HomeScreen} from './HomeScreen';
import {superHeroApi} from '../../api';
import {useEffect} from 'react';
import {useState} from 'react';
import {Hero} from '../../types';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {ADD_SUPERHEROES_LIST} from '../../redux/actions/superHeroesActionsTypes';

export const HomeContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const initSuperHeroesList = async () => {
    try {
      const allSuperHeroes: Hero[] = await superHeroApi.getAllSuperHeroes();
      dispatch({type: ADD_SUPERHEROES_LIST, payload: allSuperHeroes});
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    initSuperHeroesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <Text>Error</Text>;
  }

  if (isLoading) {
    return <Text>Is Loading</Text>;
  }

  return <HomeScreen />;
};
