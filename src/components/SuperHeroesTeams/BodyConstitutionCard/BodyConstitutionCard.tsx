import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {BodyConstitution} from '../SuperHeroesTeamsContainer';
import {bodyConstitutionCardStyles} from './bodyConstitutionCardStyles';

interface SuperHeroesTeamBodyConstitutionCardPropsTypes {
  bodyConstitution: BodyConstitution;
}

export const BodyConstitutionCard: React.FC<SuperHeroesTeamBodyConstitutionCardPropsTypes> =
  ({bodyConstitution}) => {
    const {t} = useTranslation();
    return (
      <View style={bodyConstitutionCardStyles.bodyConstitutionCard}>
        <Text style={bodyConstitutionCardStyles.title}>
          {t('Average body constitution of the team')}
        </Text>
        <Text style={bodyConstitutionCardStyles.text}>
          {`${t('Height')}:`} {`${bodyConstitution.height}  cm`}
        </Text>
        <Text style={bodyConstitutionCardStyles.text}>
          {`${t('Weight')}:`} {`${bodyConstitution.weight}  Kg`}
        </Text>
      </View>
    );
  };
