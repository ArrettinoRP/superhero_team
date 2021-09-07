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
        PowerStats
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Combat
      </Text>
      <Text>{powerstats.combat}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Durability
      </Text>
      <Text>{powerstats.durability}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Intelligence
      </Text>
      <Text>{powerstats.intelligence}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Power
      </Text>
      <Text>{powerstats.power}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Speed
      </Text>
      <Text>{powerstats.speed}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Strength
      </Text>
      <Text>{powerstats.strength}</Text>
    </View>
  );
};
