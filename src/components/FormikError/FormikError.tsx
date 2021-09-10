import React from 'react';
import {View, Text} from 'react-native';
import {formikErrorStyles} from './formikErrorStyles';

interface FormikErrorPropsTypes {
  errorMessage: string;
}

export const FormikError: React.FC<FormikErrorPropsTypes> = ({
  errorMessage,
}) => {
  return (
    <View style={formikErrorStyles.errorContainer}>
      <Text style={formikErrorStyles.errorText}>{errorMessage}</Text>
    </View>
  );
};
