import React from 'react';
import {Hero} from '../../../types';
import {AddSuperHeroesTeamCardContainer} from './AddSuperHeroesTeamCard/AddSuperHeroesTeamCardContainer';
import {SuperHeroesTeamCardContainer} from './SuperHeroesTeamCard/SuperHeroesTeamCardContainer';

interface SuperHeroesCardsListPropsTypes {
  teamArray: Array<Hero | null>;
}

export const SuperHeroesCardsList: React.FC<SuperHeroesCardsListPropsTypes> = ({
  teamArray,
}) => {
  return (
    <>
      {teamArray.map((item, index) =>
        !item ? (
          <AddSuperHeroesTeamCardContainer key={index} />
        ) : (
          <SuperHeroesTeamCardContainer
            key={index}
            name={item.name}
            index={index}
            alignment={item.biography.alignment}
            imageUrl={item.images.md}
            id={item.id}
          />
        ),
      )}
    </>
  );
};
