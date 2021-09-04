import {Hero, Store} from '../../../types';
import {useSelector} from 'react-redux';

interface searchLogicPropsTypes {
  searchBarValue: string;
}

export const useSuperHeroesListFiltered: (
  props: searchLogicPropsTypes,
) => Hero[] = ({searchBarValue}) => {
  const superHeroesList: Hero[] = useSelector(
    (state: Store) => state.superHeroes.list,
  );
  const newSuperHeroesListFiltered: Hero[] = superHeroesList.filter(
    (hero: Hero) => {
      const heroNameUpperCase: string = hero.name.toUpperCase();
      const searchBarValueUpperCase: string = searchBarValue.toUpperCase();
      return heroNameUpperCase.includes(searchBarValueUpperCase);
    },
  );
  return newSuperHeroesListFiltered;
};
