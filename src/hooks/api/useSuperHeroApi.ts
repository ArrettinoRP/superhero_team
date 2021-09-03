import axios from 'axios';
import {useDispatch} from 'react-redux';
import {Hero} from '../../types';
import {ADD_SUPERHEROES_LIST} from '../../redux/actions/superHeroesActionsTypes';

const superHeroApiBaseUrl = 'https://akabab.github.io/superhero-api/api';

export const useSuperHeroApi = () => {
  const dispatch = useDispatch();
  const getAllSuperHeroes = async () => {
    await axios
      .get(`${superHeroApiBaseUrl}/all.json`)
      .then(response => JSON.parse(response.request._response))
      .then((allSuperHeroes: Hero[]) =>
        dispatch({type: ADD_SUPERHEROES_LIST, payload: allSuperHeroes}),
      );
  };

  return {getAllSuperHeroes};
};
