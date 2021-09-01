import axios from 'axios';
import {Hero} from '../types';

type GetAllSuperHeroesType = () => Promise<Hero[]>;

const superHeroApiBaseUrl = 'https://akabab.github.io/superhero-api/api';

export const getAllSuperHeroes: GetAllSuperHeroesType = async () => {
  return axios
    .get(`${superHeroApiBaseUrl}/all.json`)
    .then(response => JSON.parse(response.request._response));
};
