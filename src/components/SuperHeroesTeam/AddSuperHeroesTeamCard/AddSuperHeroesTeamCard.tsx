import React from 'react';
import {Pressable, View} from 'react-native';
import {SuperHeroCard} from '../../SuperHeroCard/SuperHeroCard';

interface AddSuperHeroesTeamCardPropsTypes {
  onPress: () => void;
}

export const AddSuperHeroesTeamCard: React.FC<AddSuperHeroesTeamCardPropsTypes> =
  ({onPress}) => {
    return (
      <View>
        <Pressable onPress={onPress}>
          <SuperHeroCard
            image={
              'https://s3.amazonaws.com/libapps/accounts/42353/images/superheroes.png'
            }
            name={'Add new SuperHero'}
          />
        </Pressable>
      </View>
    );
  };
