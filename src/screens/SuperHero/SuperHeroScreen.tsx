import React from 'react';
import {View, ScrollView} from 'react-native';
import {Hero} from '../../types';
import {
  SuperHeroImageCard,
  AppearanceCard,
  BasicInformationCard,
  PowerstatsCard,
} from '../../components/SuperHero';
import {AddButtonContainer} from '../../components/AddButton/AddButtonContainer';
import {superHeroStyles} from './superHeroStyles';

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
        <View>
          <View style={superHeroStyles.imageContainer}>
            <SuperHeroImageCard uri={superHero.images.sm} />
          </View>
          <View style={superHeroStyles.informationCard}>
            <View style={superHeroStyles.informationCardRow1Container}>
              <View style={superHeroStyles.informationCardRow1}>
                <View style={superHeroStyles.basicInformationCardContainer}>
                  <BasicInformationCard
                    race={superHero.appearance.race}
                    gender={superHero.appearance.gender}
                    aliases={superHero.biography.aliases}
                  />
                </View>
                <View style={superHeroStyles.appearanceCardContainer}>
                  <AppearanceCard appearance={appearance} />
                </View>
              </View>
            </View>
            <View style={superHeroStyles.informationCardRow2}>
              <PowerstatsCard powerstats={superHero.powerstats} />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={superHeroStyles.addButtonContainer}>
        <AddButtonContainer superHero={superHero} />
      </View>
    </View>
  );
};
