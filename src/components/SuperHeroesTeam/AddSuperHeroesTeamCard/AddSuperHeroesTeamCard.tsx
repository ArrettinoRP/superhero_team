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
              'https://stol.guru/wp-content/uploads/2019/01/shgDPtdsbtA.jpg'
            }
            name={'Add new SuperHero'}
          />
        </Pressable>
      </View>
    );
  };
