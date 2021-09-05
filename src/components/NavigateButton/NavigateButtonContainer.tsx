import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigateButton} from './NavigateButton';
import {MainScreenProp, StackScreensListTypes} from '../../navigation';

interface NavigateButtonContainerPropsTypes {
  title: string;
  navigateTo: keyof StackScreensListTypes;
}

export const NavigateButtonContainer: React.FC<NavigateButtonContainerPropsTypes> =
  ({title, navigateTo}) => {
    const navigation = useNavigation<MainScreenProp>();
    const onPress = () => navigation.navigate(navigateTo);
    return <NavigateButton title={title} onPress={onPress} />;
  };
