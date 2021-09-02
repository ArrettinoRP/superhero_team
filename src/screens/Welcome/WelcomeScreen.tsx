import React from 'react';
import {View, ImageBackground} from 'react-native';
import {welcomeStyles} from './welcomeStyles';
import superHeroTeamImage from '../../assets/images/superHeroTeam.jpg';
import {LinkButtonContainer} from '../../components/LinkButton/LinkButtonContainer';

export const WelcomeScreen: React.FC = () => {
  return (
    <View style={welcomeStyles.container}>
      <ImageBackground
        source={superHeroTeamImage}
        resizeMode="cover"
        style={welcomeStyles.image}>
        <LinkButtonContainer />
      </ImageBackground>
    </View>
  );
};
