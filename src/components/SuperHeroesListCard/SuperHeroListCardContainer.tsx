import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SuperHeroListCard} from './SuperHeroListCard';
import {MainScreenProp} from '../../navigation';

interface SuperHeroListCardContainerPropsTypes {
  image: string;
  name: string;
  alignment: string;
  id: number;
}

export const SuperHeroListCardContainer: React.FC<SuperHeroListCardContainerPropsTypes> =
  ({image, name, alignment, id}) => {
    const navigation = useNavigation<MainScreenProp>();
    const onPress = () => navigation.navigate('SuperHero', {id});
    return (
      <SuperHeroListCard
        onPress={onPress}
        name={name}
        image={image}
        alignment={alignment}
        id={id}
      />
    );
  };
