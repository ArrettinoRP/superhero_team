import React from 'react';
import {View, Image, Text} from 'react-native';
import {superHeroListCardStyles} from './superHeroListCardStyles';
import {AddButton} from '../AddButton/AddButton';

interface SuperHeroListCard {
  image: string;
  name: string;
}

export const SuperHeroListCard: React.FC<SuperHeroListCard> = ({
  image,
  name,
}) => {
  return (
    <View style={superHeroListCardStyles.container}>
      <Image source={{uri: image}} style={superHeroListCardStyles.image} />
      <View style={superHeroListCardStyles.informationContainer}>
        <Text style={superHeroListCardStyles.name}>{name}</Text>
      </View>
      <AddButton />
    </View>
  );
};
