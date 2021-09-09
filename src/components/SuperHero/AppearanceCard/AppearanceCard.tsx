import React from 'react';
import {View, Text} from 'react-native';
import {SuperHeroAppearance} from '../../../screens/SuperHero/SuperHeroScreen';

interface AppearanceCardPropsCard {
  appearance: SuperHeroAppearance;
}

export const AppearanceCard: React.FC<AppearanceCardPropsCard> = ({
  appearance,
}) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        Appearance
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Eye Color
      </Text>
      <Text>{appearance.eyeColor}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Hair Color
      </Text>
      <Text>{appearance.hairColor}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Height
      </Text>
      <Text>{appearance.height[1]}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Weight
      </Text>
      <Text>{appearance.weight[1]}</Text>
    </View>
  );
};
