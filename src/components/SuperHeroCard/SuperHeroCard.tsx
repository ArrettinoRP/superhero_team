import React from 'react';
import {Image, Text, View} from 'react-native';
import {superHeroCardStyles} from './superHeroCardStyles';

interface SuperHeroCardPropsTypes {
  image: string;
  name: string;
}

export const SuperHeroCard: React.FC<SuperHeroCardPropsTypes> = ({
  image,
  name,
}) => {
  return (
    <View style={superHeroCardStyles.cardContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={superHeroCardStyles.image}
      />
      <Text style={superHeroCardStyles.name}>{name}</Text>
    </View>
  );
};
