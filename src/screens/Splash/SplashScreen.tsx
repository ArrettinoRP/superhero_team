import React from 'react';
import {ImageBackground} from 'react-native';
import superHeroTeamImage from '../../assets/images/superHeroTeam.jpg';

export const SplashScreen: React.FC = () => {
  return (
    <ImageBackground
      source={superHeroTeamImage}
      resizeMode="cover"
      style={{flex: 1}}
    />
  );
};