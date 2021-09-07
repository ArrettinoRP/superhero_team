import React from 'react';
import {View, ScrollView} from 'react-native';
import {SuperHeroCard} from '../../components/SuperHeroCard/SuperHeroCard';
import {Work, Powerstats, Connections, Biography} from '../../types/Hero';
import {
  AppearanceCard,
  BasicInformationCard,
  BiographyCard,
  PowerstatsCard,
} from '../../components/SuperHero';
import {AddButton} from '../../components/AddButton/AddButton';

export interface SuperHeroAppearance {
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

interface SuperHeroScreenPropsTypes {
  name: string;
  image: string;
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
  appearance,
  race,
  gender,
  work,
  powerstats,
  biography,
}) => {
  return (
    <View>
      <ScrollView>
        <View key="1" style={{flexDirection: 'row'}}>
          <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
            <SuperHeroCard name={name} image={image} />
          </View>
          <View style={{flex: 1}}>
            <BasicInformationCard race={race} gender={gender} work={work} />
            <BiographyCard biography={biography} />
            <AppearanceCard appearance={appearance} />
            <PowerstatsCard powerstats={powerstats} />
          </View>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: '5%', right: '5%'}}>
        <AddButton />
      </View>
    </View>
  );
};
