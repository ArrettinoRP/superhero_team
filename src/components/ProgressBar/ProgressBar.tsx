import React from 'react';
import {View} from 'react-native';
import {progressBarStyles} from './progressBarStyles';

interface ProgressBarPropsTypes {
  bgcolor: string;
  completed: number;
}

export const ProgressBar: React.FC<ProgressBarPropsTypes> = ({
  bgcolor,
  completed,
}) => {
  return (
    <View style={progressBarStyles.container}>
      <View
        style={{
          ...progressBarStyles.filler,
          width: `${completed}%`,
          backgroundColor: bgcolor,
        }}
      />
    </View>
  );
};
