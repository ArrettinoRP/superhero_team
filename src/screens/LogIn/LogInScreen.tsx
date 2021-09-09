import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';

interface LogInScreenPropsTypes {
  onPressLogIn: (values: LogInFormTypes) => void;
  onPressSignUp: () => void;
}

export interface LogInFormTypes {
  email: string;
  password: string;
}

export const LogInScreen: React.FC<LogInScreenPropsTypes> = ({
  onPressLogIn,
  onPressSignUp,
}) => {
  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => onPressLogIn(values)}>
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
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        )}
      </Formik>
      <Button title="SignUp" onPress={onPressSignUp} />
    </View>
  );
};
