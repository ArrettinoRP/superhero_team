import React from 'react';
import {View, ScrollView} from 'react-native';
import {SuperHeroCard} from '../../components/SuperHeroCard/SuperHeroCard';
import {Hero} from '../../types';
import {
  AppearanceCard,
  BasicInformationCard,
  BiographyCard,
  PowerstatsCard,
} from '../../components/SuperHero';
import {AddButtonContainer} from '../../components/AddButton/AddButtonContainer';

export interface SuperHeroAppearance {
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

interface SuperHeroScreenPropsTypes {
  appearance: SuperHeroAppearance;
  superHero: Hero;
}

export const SuperHeroScreen: React.FC<SuperHeroScreenPropsTypes> = ({
  appearance,
  superHero,
}) => {
  return (
    <View>
      <ScrollView>
        <View key="1" style={{flexDirection: 'row'}}>
          <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
            <SuperHeroCard name={superHero.name} image={superHero.images.md} />
          </View>
          <View style={{flex: 1}}>
            <BasicInformationCard
              race={superHero.appearance.race}
              gender={superHero.appearance.gender}
              work={superHero.work}
            />
            <BiographyCard biography={superHero.biography} />
            <AppearanceCard appearance={appearance} />
            <PowerstatsCard powerstats={superHero.powerstats} />
          </View>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: '5%', right: '5%'}}>
        <AddButtonContainer superHero={superHero} />
      </View>
    </View>
  );
};
