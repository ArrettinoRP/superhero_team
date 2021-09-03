import React from 'react';
import {Button} from 'react-native';

interface NavigateButtonPropsTypes {
  onPress: () => void;
  title: string;
}

export const NavigateButton: React.FC<NavigateButtonPropsTypes> = ({
  title,
  onPress,
}) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      color="#26619C"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};
