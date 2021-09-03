import React from 'react';
import {View, ImageBackground} from 'react-native';
import {NavigateButtonContainer} from '../../components';
import {welcomeStyles} from './welcomeStyles';
import superHeroTeamImage from '../../assets/images/superHeroTeam.jpg';

export const WelcomeScreen: React.FC = () => {
  return (
    <View style={welcomeStyles.container}>
      <ImageBackground
        source={superHeroTeamImage}
        resizeMode="cover"
        style={welcomeStyles.image}>
        <NavigateButtonContainer title={'Start'} />
      </ImageBackground>
    </View>
  );
};
