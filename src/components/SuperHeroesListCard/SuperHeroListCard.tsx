import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {superHeroListCardStyles} from './superHeroListCardStyles';
import {AddButtonContainer} from '../AddButton/AddButtonContainer';
import {Tag} from '../Tag/Tag';

interface SuperHeroListCardPropsContainer {
  image: string;
  name: string;
  alignment: string;
  onPress: () => void;
}

export const SuperHeroListCard: React.FC<SuperHeroListCardPropsContainer> = ({
  image,
  name,
  alignment,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
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
          <AddButtonContainer />
        </View>
      </View>
    </Pressable>
  );
};
