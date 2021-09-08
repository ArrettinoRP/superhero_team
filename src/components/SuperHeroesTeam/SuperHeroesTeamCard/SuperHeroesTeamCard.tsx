import React from 'react';
import {View} from 'react-native';
import {SuperHeroCard} from '../../SuperHeroCard/SuperHeroCard';

interface SuperHeroesTeamCardPropsType {
  imageUrl: string;
  name: string;
}

export const SuperHeroesTeamCard: React.FC<SuperHeroesTeamCardPropsType> = ({
  imageUrl,
  name,
}) => {
  return (
    <View>
      <SuperHeroCard image={imageUrl} name={name} />
    </View>
  );
};
