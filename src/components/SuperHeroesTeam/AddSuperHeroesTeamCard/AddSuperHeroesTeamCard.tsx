import React from 'react';
import {View} from 'react-native';
import {SuperHeroCard} from '../../SuperHeroCard/SuperHeroCard';

export const AddSuperHeroesTeamCard: React.FC = () => {
  return (
    <View>
      <SuperHeroCard
        image={
          'https://s3.amazonaws.com/libapps/accounts/42353/images/superheroes.png'
        }
        name={'Add new SuperHero'}
      />
    </View>
  );
};
