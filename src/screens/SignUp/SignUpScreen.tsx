import React from 'react';
import {Button, TextInput, View, Text, Pressable} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {signUpStyles} from './signUpStyles';
import {FormikError} from '../../components/FormikError/FormikError';

interface SignUpScreenPropsTypes {
  onPressLogIn: () => void;
  onPressSignUp: (values: SignUpFormTypes) => void;
}

const SingUpSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export interface SignUpFormTypes {
  email: string;
  password: string;
}

export const SignUpScreen: React.FC<SignUpScreenPropsTypes> = ({
  onPressLogIn,
  onPressSignUp,
}) => {
  return (
    <View style={signUpStyles.signUpContianer}>
      <View style={signUpStyles.formContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={SingUpSchema}
          onSubmit={values => onPressSignUp(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={signUpStyles.form}>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={'Email'}
                style={signUpStyles.textInput}
              />
              {errors.email && touched.email ? (
                <FormikError errorMessage={errors.email} />
              ) : null}
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder={'Password'}
                secureTextEntry={true}
                style={signUpStyles.textInput}
              />
              {errors.password && touched.password ? (
                <FormikError errorMessage={errors.password} />
              ) : null}
              <View style={signUpStyles.signUpButton}>
                <Button onPress={handleSubmit} title="Sign Up" />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={signUpStyles.logInContrainer}>
        <View style={signUpStyles.logIn}>
          <Text style={signUpStyles.logInText}>Have an account? </Text>
          <Pressable onPress={onPressLogIn}>
            <Text style={signUpStyles.logInLink}> Log In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
