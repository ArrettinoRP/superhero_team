import React from 'react';
import {View, ImageBackground, Button} from 'react-native';
import {welcomeStyles} from './welcomeStyles';
import superHeroTeamImage from '../../assets/images/superHeroTeamWithLogo.jpg';

interface WelcomeScreenPropsTypes {
  onPress: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenPropsTypes> = ({onPress}) => {
  return (
    <View style={welcomeStyles.container}>
      <ImageBackground
        source={superHeroTeamImage}
        resizeMode="cover"
        style={welcomeStyles.image}>
        <Button
          onPress={onPress}
          title="Start"
          color="#26619C"
          accessibilityLabel="Learn more about this purple button"
        />
      </ImageBackground>
    </View>
  );
};
