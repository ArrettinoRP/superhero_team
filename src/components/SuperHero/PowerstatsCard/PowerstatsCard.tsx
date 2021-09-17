import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {Powerstats} from '../../../types';

interface PowerstatsCardPropsTypes {
  powerstats: Powerstats;
}

export const PowerstatsCard: React.FC<PowerstatsCardPropsTypes> = ({
  powerstats,
}) => {
  const {t} = useTranslation();
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        {`${t('PowerStats')}:`}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {`${t('Combat')}:`} {powerstats.combat}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {`${t('Durability')}:`} {powerstats.durability}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {`${t('Intelligence')}:`} {powerstats.intelligence}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {`${t('Power')}:`} {powerstats.power}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {`${t('Speed')}:`} {powerstats.speed}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {`${t('Strength')}:`} {powerstats.strength}
      </Text>
    </View>
  );
};
