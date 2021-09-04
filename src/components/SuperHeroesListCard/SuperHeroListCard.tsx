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
      <View style={superHeroListCardStyles.imageContainer}>
        <Image source={{uri: image}} style={superHeroListCardStyles.image} />
      </View>
      <View style={superHeroListCardStyles.informationContainer}>
        <Text style={superHeroListCardStyles.name}>{name}</Text>
      </View>
      <View style={superHeroListCardStyles.actionButtonContainer}>
        <AddButton />
      </View>
    </View>
  );
};
