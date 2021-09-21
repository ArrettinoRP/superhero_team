import React from 'react';
import {View, ImageBackground, Button} from 'react-native';
import {welcomeStyles} from './welcomeStyles';
import superHeroTeamImage from '../../assets/images/superHeroTeamWithLogo.jpg';
import {useTranslation} from 'react-i18next';

interface WelcomeScreenPropsTypes {
  onPress: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenPropsTypes> = ({onPress}) => {
  const {t} = useTranslation();
  return (
    <View style={welcomeStyles.container}>
      <ImageBackground
        source={superHeroTeamImage}
        resizeMode="cover"
        style={welcomeStyles.image}>
        <Button
          onPress={onPress}
          title={t('Start')}
          color="#26619C"
          accessibilityLabel="Learn more about this purple button"
        />
      </ImageBackground>
    </View>
  );
};
