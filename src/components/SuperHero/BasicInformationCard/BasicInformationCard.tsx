import React from 'react';
import {View, Text} from 'react-native';
import {basicInformationCardStyles} from './basicInformationCardStyles';

interface BasicInformationCardPropsType {
  race: string;
  gender: string;
  aliases: string[];
}

export const BasicInformationCard: React.FC<BasicInformationCardPropsType> = ({
  race,
  gender,
  aliases,
}) => {
  return (
    <View style={basicInformationCardStyles.basicInformationCard}>
      <Text style={basicInformationCardStyles.title}>Basic information</Text>
      <Text style={basicInformationCardStyles.text}>Race</Text>
      <Text>{race}</Text>
      <Text style={basicInformationCardStyles.text}>Gender</Text>
      <Text>{gender}</Text>
      <Text style={basicInformationCardStyles.text}>Aliases</Text>
      <Text>{aliases}</Text>
    </View>
  );
};
