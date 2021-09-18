import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {superHeroListCardStyles} from './superHeroListCardStyles';
import {AddButtonContainer} from '../AddButton/AddButtonContainer';
import {Tag} from '../Tag/Tag';
import {Hero} from '../../types';

interface SuperHeroListCardPropsContainer {
  superHero: Hero;
  onPress: () => void;
}

export const SuperHeroListCard: React.FC<SuperHeroListCardPropsContainer> = ({
  superHero,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={superHeroListCardStyles.container}>
        <View style={superHeroListCardStyles.imageContainer}>
          <Image
            source={{uri: superHero.images.md}}
            style={superHeroListCardStyles.image}
          />
        </View>
        <View style={superHeroListCardStyles.informationContainer}>
          <Text style={superHeroListCardStyles.name}>{superHero.name}</Text>
          <View style={superHeroListCardStyles.tagContainer}>
            <Tag text={superHero.biography.alignment} />
          </View>
        </View>
        <View style={superHeroListCardStyles.actionButtonContainer}>
          <AddButtonContainer superHero={superHero} />
        </View>
      </View>
    </Pressable>
  );
};
