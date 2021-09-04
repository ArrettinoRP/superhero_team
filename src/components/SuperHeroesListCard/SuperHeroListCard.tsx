import React from 'react';
import {View, Image, Text} from 'react-native';
import {superHeroListCardStyles} from './superHeroListCardStyles';
import {AddButton} from '../AddButton/AddButton';
import {Tag} from '../Tag/Tag';

interface SuperHeroListCard {
  image: string;
  name: string;
  alignment: string;
}

export const SuperHeroListCard: React.FC<SuperHeroListCard> = ({
  image,
  name,
  alignment,
}) => {
  return (
    <View style={superHeroListCardStyles.container}>
      <View style={superHeroListCardStyles.imageContainer}>
        <Image source={{uri: image}} style={superHeroListCardStyles.image} />
      </View>
      <View style={superHeroListCardStyles.informationContainer}>
        <Text style={superHeroListCardStyles.name}>{name}</Text>
        <View style={{flexDirection: 'row', marginTop: 3}}>
          <Tag text={alignment} />
        </View>
      </View>
      <View style={superHeroListCardStyles.actionButtonContainer}>
        <AddButton />
      </View>
    </View>
  );
};
