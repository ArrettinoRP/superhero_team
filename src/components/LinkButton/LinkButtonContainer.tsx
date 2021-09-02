import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {LinkButton} from './LinkButton';
import {StackParamListTypes} from '../../navigation/Navigation';

interface LinkButtonContainerPropsTypes {}
type mainScreenProp = NavigationProp<StackParamListTypes>;

export const LinkButtonContainer: React.FC<LinkButtonContainerPropsTypes> =
  () => {
    const navigation = useNavigation<mainScreenProp>();
    const onPress = () => navigation.navigate('Home');
    return <LinkButton onPress={onPress} />;
  };
