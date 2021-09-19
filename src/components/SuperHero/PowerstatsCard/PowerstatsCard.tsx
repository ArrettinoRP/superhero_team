import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {Powerstats} from '../../../types';
import {ProgressBar} from '../../ProgressBar/ProgressBar';
import {powerstatsCardStyles} from './powerstatsCardStyles';

interface PowerstatsCardPropsTypes {
  powerstats: Powerstats;
}

export const PowerstatsCard: React.FC<PowerstatsCardPropsTypes> = ({
  powerstats,
}) => {
  const {t} = useTranslation();
  return (
    <View style={powerstatsCardStyles.powerstatsCard}>
      <Text style={powerstatsCardStyles.title}>{`${t('PowerStats')}:`}</Text>
      <Text style={powerstatsCardStyles.text}>
        {`${t('Combat')}:`}
        {powerstats.combat}
      </Text>
      <ProgressBar bgcolor={'#DF711B'} completed={powerstats.combat} />
      <Text style={powerstatsCardStyles.text}>
        {`${t('Durability')}:`}
        {powerstats.durability}
      </Text>
      <ProgressBar bgcolor={'#5C3D2E'} completed={powerstats.durability} />
      <Text style={powerstatsCardStyles.text}>
        {`${t('Intelligence')}:`}
        {powerstats.intelligence}
      </Text>
      <ProgressBar bgcolor={'#52006A'} completed={powerstats.intelligence} />
      <Text style={powerstatsCardStyles.text}>
        {`${t('Power')}:`}
        {powerstats.power}
      </Text>
      <ProgressBar bgcolor={'#161616'} completed={powerstats.power} />
      <Text style={powerstatsCardStyles.text}>
        {`${t('Speed')}:`}
        {powerstats.speed}
      </Text>
      <ProgressBar bgcolor={'#5089C6'} completed={powerstats.speed} />
      <Text style={powerstatsCardStyles.text}>
        {`${t('Strength')}:`}
        {powerstats.strength}
      </Text>
      <ProgressBar bgcolor={'#911F27'} completed={powerstats.strength} />
    </View>
  );
};
