import React from 'react';
import {View, Text} from 'react-native';
import {BodyConstitution} from '../SuperHeroesTeamContainer';

interface SuperHeroesTeamBodyConstitutionCardPropsTypes {
  bodyConstitution: BodyConstitution;
}

export const SuperHeroesTeamBodyConstitutionCard: React.FC<SuperHeroesTeamBodyConstitutionCardPropsTypes> =
  ({bodyConstitution}) => {
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Average body constitution of the team
        </Text>
        <Text>Height: {`${bodyConstitution.height}  cm`}</Text>
        <Text>Weight: {`${bodyConstitution.weight}  Kg`}</Text>
      </View>
    );
  };
