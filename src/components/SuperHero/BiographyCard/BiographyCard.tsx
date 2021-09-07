import React from 'react';
import {Text, View} from 'react-native';
import {Biography} from '../../../types';

interface BiographyCardPropsTypes {
  biography: Biography;
}

export const BiographyCard: React.FC<BiographyCardPropsTypes> = ({
  biography,
}) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        Biography
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Aliases
      </Text>
      <Text>
        {biography.aliases.map(alias => (
          <Text>{alias}</Text>
        ))}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Alignment
      </Text>
      <Text>{biography.alignment}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Alter Egos
      </Text>
      <Text>{biography.alterEgos}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        First Appearance
      </Text>
      <Text>{biography.firstAppearance}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        FullName
      </Text>
      <Text>{biography.fullName}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Place Of Birth
      </Text>
      <Text>{biography.placeOfBirth}</Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Publisher
      </Text>
      <Text>{biography.publisher}</Text>
    </View>
  );
};
