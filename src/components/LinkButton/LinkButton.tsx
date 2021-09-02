import React from 'react';
import {Button} from 'react-native';

interface LinkButtonPropsTypes {
  onPress: () => void;
}

export const LinkButton: React.FC<LinkButtonPropsTypes> = ({onPress}) => {
  return (
    <Button
      onPress={onPress}
      title="Start"
      color="#26619C"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};
