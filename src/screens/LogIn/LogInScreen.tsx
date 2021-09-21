import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {logInStyles} from './logInStyles';
import {FormikError} from '../../components/FormikError/FormikError';
import {ErrorModal, ErrorMessage} from '../../components/ErrorModal/ErrorModal';
import {useTranslation} from 'react-i18next';

interface LogInScreenPropsTypes {
  onPressLogIn: (values: LogInFormTypes) => void;
  onPressSignUp: () => void;
  onPressErrorModalCloseButton: () => void;
  isErrorModalVisible: boolean;
  errorMessage: ErrorMessage;
}

const LogInSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export interface LogInFormTypes {
  email: string;
  password: string;
}

export const LogInScreen: React.FC<LogInScreenPropsTypes> = ({
  onPressLogIn,
  onPressSignUp,
  isErrorModalVisible,
  errorMessage,
  onPressErrorModalCloseButton,
}) => {
  const {t} = useTranslation();
  return (
    <View style={logInStyles.logInContianer}>
      <ErrorModal
        onPressCloseButton={onPressErrorModalCloseButton}
        errorMessage={errorMessage}
        isVisible={isErrorModalVisible}
      />
      <View style={logInStyles.formContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={LogInSchema}
          onSubmit={values => onPressLogIn(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={logInStyles.form}>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={t('Email')}
                style={logInStyles.textInput}
              />
              {errors.email && touched.email ? (
                <FormikError errorMessage={errors.email} />
              ) : null}
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder={t('Password')}
                secureTextEntry={true}
                style={logInStyles.textInput}
              />
              {errors.password && touched.password ? (
                <FormikError errorMessage={errors.password} />
              ) : null}
              <View style={logInStyles.logInButton}>
                <Button onPress={handleSubmit} title={t('Log In')} />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={logInStyles.signUpContrainer}>
        <View style={logInStyles.signUp}>
          <Text style={logInStyles.signUpText}>
            {t("Don't have an account?")}
            {'   '}
            <Text onPress={onPressSignUp} style={logInStyles.signUpLink}>
              {t('Sign Up')}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
