import React, {useEffect, useState} from 'react';
import {HomeScreen} from './HomeScreen';
import {ErrorScreen} from '../Error';
import {LoadingScreen} from '../Loading';
import {useSuperHeroApi} from '../../hooks/api/useSuperHeroApi';

export const HomeContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const {getAllSuperHeroes} = useSuperHeroApi();

  const initSuperHeroesList = async () => {
    try {
      await getAllSuperHeroes();
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
    return <ErrorScreen />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <HomeScreen />;
};
