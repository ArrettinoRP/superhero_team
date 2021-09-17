import React from 'react';
import {Hero} from '../../../types';
import {SuperHeroTeamCardContainer} from './SuperHeroesTeamCard/SuperHeroTeamCardContainer';

interface SuperHeroesCardsListPropsTypes {
  teamArray: Array<Hero | null>;
}

export const SuperHeroesCardsList: React.FC<SuperHeroesCardsListPropsTypes> = ({
  teamArray,
}) => {
  return (
    <>
      {teamArray.map((item, index) => (
        <SuperHeroTeamCardContainer
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
