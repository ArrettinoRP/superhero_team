import React from 'react';
import {View} from 'react-native';
import {RemoveButtonContainer} from '../../RemoveButton/RemoveButtonContainer';
import {SuperHeroCard} from '../../SuperHeroCard/SuperHeroCard';

interface SuperHeroesTeamCardPropsType {
  imageUrl: string;
  name: string;
  alignment: string;
  index: number;
}

export const SuperHeroesTeamCard: React.FC<SuperHeroesTeamCardPropsType> = ({
  imageUrl,
  name,
  alignment,
  index,
}) => {
  return (
    <View>
      <SuperHeroCard image={imageUrl} name={name} />
      <View
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          alignSelf: 'flex-end',
          paddingRight: 10,
          marginTop: 10,
        }}>
        <RemoveButtonContainer alignment={alignment} index={index} />
      </View>
    </View>
  );
};
