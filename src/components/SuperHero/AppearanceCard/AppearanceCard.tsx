import React from 'react';
import {View, Text} from 'react-native';
import {SuperHeroAppearance} from '../../../screens/SuperHero/SuperHeroScreen';
import {appearanceCardStyles} from './appearanceCardStyles';

interface AppearanceCardPropsCard {
  appearance: SuperHeroAppearance;
}

export const AppearanceCard: React.FC<AppearanceCardPropsCard> = ({
  appearance,
}) => {
  return (
    <View style={appearanceCardStyles.appearanceCard}>
      <Text style={appearanceCardStyles.title}>Appearance</Text>
      <Text style={appearanceCardStyles.text}>Eye Color</Text>
      <Text>{appearance.eyeColor}</Text>
      <Text style={appearanceCardStyles.text}>Hair Color</Text>
      <Text>{appearance.hairColor}</Text>
      <Text style={appearanceCardStyles.text}>Height</Text>
      <Text>{appearance.height[1]}</Text>
      <Text style={appearanceCardStyles.text}>Weight</Text>
      <Text>{appearance.weight[1]}</Text>
    </View>
  );
};
