import React from 'react';
import {Text, View} from 'react-native';
import {SuperHeroCard} from '../../components/SuperHeroCard/SuperHeroCard';
import {Work, Powerstats, Connections, Biography} from '../../types/Hero';

interface SuperHeroAppearance {
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

interface SuperHeroScreenPropsTypes {
  name: string;
  image: string;
  aliases: string[];
  appearance: SuperHeroAppearance;
  race: string;
  gender: string;
  work: Work;
  powerstats: Powerstats;
  connections: Connections;
  biography: Biography;
}

export const SuperHeroScreen: React.FC<SuperHeroScreenPropsTypes> = ({
  name,
  image,
  aliases,
  appearance,
  race,
  gender,
  work,
  powerstats,
  biography,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
        <SuperHeroCard name={name} image={image} />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          Aliases
        </Text>
        <Text>{aliases[0]}</Text>
      </View>
    </View>
  );
};
