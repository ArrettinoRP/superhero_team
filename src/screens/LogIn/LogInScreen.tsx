import React from 'react';
import {Button, Pressable, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import {logInStyles} from './logInStyles';

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
    <View style={logInStyles.logInContianer}>
      <View style={logInStyles.formContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => onPressLogIn(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={logInStyles.form}>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={'Email'}
                style={logInStyles.textInput}
              />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder={'Password'}
                secureTextEntry={true}
                style={logInStyles.textInput}
              />
              <View style={logInStyles.logInButton}>
                <Button onPress={handleSubmit} title="Log In" />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={logInStyles.signUpContrainer}>
        <View style={logInStyles.signUp}>
          <Text style={logInStyles.signUpText}>Don't have an account? </Text>
          <Pressable onPress={onPressSignUp}>
            <Text style={logInStyles.signUpLink}> Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
