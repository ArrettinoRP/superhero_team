import React from 'react';
import {Image, Text, View} from 'react-native';
import {Hero} from '../../types';
import {superHeroCardStyles} from './superHeroCardStyles';

interface SuperHeroCardPropsTypes {
  superHeroData: Hero;
}

export const SuperHeroCard: React.FC<SuperHeroCardPropsTypes> = ({
  superHeroData,
}) => {
  return (
    <View style={superHeroCardStyles.cardContainer}>
      <Image
        source={{
          uri: superHeroData.images.sm,
        }}
        style={superHeroCardStyles.image}
      />
      <Text style={superHeroCardStyles.name}>{`${superHeroData.name}`}</Text>
    </View>
  );
};
