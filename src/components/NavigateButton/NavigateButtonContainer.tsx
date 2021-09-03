import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {NavigateButton} from './NavigateButton';
import {StackScreensListTypes} from '../../navigation/Navigation';

type mainScreenProp = NavigationProp<StackScreensListTypes>;

interface NavigateButtonContainerPropsTypes {
  title: string;
  navigateTo: keyof StackScreensListTypes;
}

export const NavigateButtonContainer: React.FC<NavigateButtonContainerPropsTypes> =
  ({title, navigateTo}) => {
    const navigation = useNavigation<mainScreenProp>();
    const onPress = () => navigation.navigate(navigateTo);
    return <NavigateButton title={title} onPress={onPress} />;
  };
