import React from 'react';
import {View, Text} from 'react-native';
import {Work} from '../../../types';

interface BasicInformationCardPropsType {
  race: string;
  gender: string;
  work: Work;
}

export const BasicInformationCard: React.FC<BasicInformationCardPropsType> = ({
  race,
  gender,
  work,
}) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 30,
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        Basic information
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Race
      </Text>
      <Text>{race}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Gender
      </Text>
      <Text>{gender}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Work
      </Text>
      <Text>{work.occupation}</Text>
    </View>
  );
};
