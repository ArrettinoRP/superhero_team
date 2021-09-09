import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';

interface SignUpScreenPropsTypes {
  onPressLogIn: () => void;
  onPressSignUp: (values: SignUpFormTypes) => void;
}

export interface SignUpFormTypes {
  email: string;
  password: string;
}

export const SignUpScreen: React.FC<SignUpScreenPropsTypes> = ({
  onPressLogIn,
  onPressSignUp,
}) => {
  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => onPressSignUp(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            <Button onPress={handleSubmit} title="Sign Up" />
          </View>
        )}
      </Formik>
      <Button title="LogIn" onPress={onPressLogIn} />
    </View>
  );
};
