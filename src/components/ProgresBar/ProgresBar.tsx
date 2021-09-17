import React from 'react';
import {View, ViewStyle} from 'react-native';

interface ProgressBarPropsTypes {
  bgcolor: string;
  completed: number;
}

const ProgressBar: React.FC<ProgressBarPropsTypes> = ({bgcolor, completed}) => {
  const containerStyles: ViewStyle = {
    height: 10,
    width: '80%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles: ViewStyle = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    alignItems: 'flex-end',
    borderRadius: 50,
  };

  return (
    <View style={containerStyles}>
      <View style={fillerStyles} />
    </View>
  );
};

export default ProgressBar;
