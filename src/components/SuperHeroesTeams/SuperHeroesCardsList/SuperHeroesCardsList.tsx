import React from 'react';
import {Hero} from '../../../types';
import {SuperHeroesTeamCardContainer} from './SuperHeroesTeamCard/SuperHeroesTeamCardContainer';

interface SuperHeroesCardsListPropsTypes {
  teamArray: Array<Hero | null>;
}

export const SuperHeroesCardsList: React.FC<SuperHeroesCardsListPropsTypes> = ({
  teamArray,
}) => {
  return (
    <>
      {teamArray.map((item, index) => (
        <SuperHeroesTeamCardContainer
          key={index}
          name={item?.name}
          index={index}
          alignment={item?.biography.alignment}
          imageUrl={item?.images.md}
          id={item?.id}
        />
      ))}
    </>
  );
};
