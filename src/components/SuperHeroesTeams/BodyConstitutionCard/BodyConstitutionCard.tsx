import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {BodyConstitution} from '../SuperHeroesTeamsContainer';

interface SuperHeroesTeamBodyConstitutionCardPropsTypes {
  bodyConstitution: BodyConstitution;
}

export const BodyConstitutionCard: React.FC<SuperHeroesTeamBodyConstitutionCardPropsTypes> =
  ({bodyConstitution}) => {
    const {t} = useTranslation();
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          {t('Average body constitution of the team')}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {`${t('Height')}:`} {`${bodyConstitution.height}  cm`}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {`${t('Weight')}:`} {`${bodyConstitution.weight}  Kg`}
        </Text>
      </View>
    );
  };
