import React from 'react';
import {Pressable, View} from 'react-native';
import {RemoveButtonContainer} from '../../../RemoveButton/RemoveButtonContainer';
import {SuperHeroCard} from '../../../SuperHeroCard/SuperHeroCard';

interface SuperHeroesTeamCardPropsType {
  imageUrl?: string;
  name?: string;
  alignment?: string;
  index: number;
  onPress: () => void;
}

export const SuperHeroTeamCard: React.FC<SuperHeroesTeamCardPropsType> = ({
  imageUrl,
  name,
  alignment,
  index,
  onPress,
}) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <SuperHeroCard
          image={
            imageUrl ||
            'https://stol.guru/wp-content/uploads/2019/01/shgDPtdsbtA.jpg'
          }
          name={name || 'Add SuperHero'}
        />
        <View
          style={{
            width: 30,
            height: 30,
            position: 'absolute',
            alignSelf: 'flex-end',
            marginRight: 10,
            marginTop: 10,
          }}>
          {alignment && (
            <RemoveButtonContainer alignment={alignment} index={index} />
          )}
        </View>
      </Pressable>
    </View>
  );
};
