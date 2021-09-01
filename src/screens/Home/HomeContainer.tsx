import React from 'react';
import {HomeScreen} from './HomeScreen';
import {superHeroApi} from '../../api';
import {useEffect} from 'react';
import {useState} from 'react';
import {Hero} from '../../types';
import {Text} from 'react-native';

export const HopmeContainer: React.FC = () => {
  const [superHeroesList, setSuperHeroesList] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const initSuperHeroesList = async () => {
    try {
      const allSuperHeroes: Hero[] = await superHeroApi.getAllSuperHeroes();
      setSuperHeroesList(allSuperHeroes);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    initSuperHeroesList();
  }, []);

  if (error) {
    return <Text>Error</Text>;
  }

  if (isLoading) {
    return <Text>Is Loading</Text>;
  }

  return <HomeScreen superHeroesList={superHeroesList} />;
};
