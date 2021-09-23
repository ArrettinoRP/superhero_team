import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useLogInStyles} from './useLogInStyles';
import {FormikError} from '../../components/FormikError/FormikError';
import {
  ErrorModal,
  ModalErrorMessage,
} from '../../components/ErrorModal/ErrorModal';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../hooks/useTheme';

interface LogInScreenPropsTypes {
  onPressLogIn: (values: LogInFormTypes) => void;
  onPressSignUp: () => void;
  onPressErrorModalCloseButton: () => void;
  isErrorModalVisible: boolean;
  errorMessage: ModalErrorMessage;
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
  const {styles} = useLogInStyles();
  const {colors} = useTheme();
  return (
    <View style={styles.logInContianer}>
      <ErrorModal
        onPressCloseButton={onPressErrorModalCloseButton}
        errorMessage={errorMessage}
        isVisible={isErrorModalVisible}
      />
      <View style={styles.formContainer}>
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
            <View style={styles.form}>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={t('Email')}
                style={styles.textInput}
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
                style={styles.textInput}
              />
              {errors.password && touched.password ? (
                <FormikError errorMessage={errors.password} />
              ) : null}
              <View style={styles.logInButton}>
                <Button
                  color={colors.primary}
                  onPress={handleSubmit}
                  title={t('Log In')}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.signUpContrainer}>
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>
            {t("Don't have an account?")}
            {'   '}
            <Text onPress={onPressSignUp} style={styles.signUpLink}>
              {t('Sign Up')}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
