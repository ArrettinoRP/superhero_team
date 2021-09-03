import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {NavigateButton} from './NavigateButton';
import {StackScreensListTypes} from '../../navigation/Navigation';

interface NavigateButtonContainerPropsTypes {
  title: string;
}
type mainScreenProp = NavigationProp<StackScreensListTypes>;

export const NavigateButtonContainer: React.FC<NavigateButtonContainerPropsTypes> =
  ({title}) => {
    const navigation = useNavigation<mainScreenProp>();
    const onPress = () => navigation.navigate('Home');
    return <NavigateButton title={title} onPress={onPress} />;
  };
