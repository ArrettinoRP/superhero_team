import React from 'react';
import {View, Text} from 'react-native';
import {Powerstats} from '../../../types';

interface PowerstatsCardPropsTypes {
  powerstats: Powerstats;
}

export const PowerstatsCard: React.FC<PowerstatsCardPropsTypes> = ({
  powerstats,
}) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        PowerStats:
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Combat: {powerstats.combat}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Durability: {powerstats.durability}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Intelligence: {powerstats.intelligence}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Power: {powerstats.power}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Speed: {powerstats.speed}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Strength: {powerstats.strength}
      </Text>
    </View>
  );
};
