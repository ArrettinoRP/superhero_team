import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {LinkButton} from './LinkButton';
import {StackScreensListTypes} from '../../navigation/Navigation';

interface LinkButtonContainerPropsTypes {}
type mainScreenProp = NavigationProp<StackScreensListTypes>;

export const LinkButtonContainer: React.FC<LinkButtonContainerPropsTypes> =
  () => {
    const navigation = useNavigation<mainScreenProp>();
    const onPress = () => navigation.navigate('Home');
    return <LinkButton onPress={onPress} />;
  };
