import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogInContainer} from '../screens/LogIn/LogInContainer';
import {SingUpContainer} from '../screens/SignUp/SingUpContainer';
import {WelcomeContainer} from '../screens/Welcome';

export type LoggedOutScreensParamsTypes = {
  Welcome: undefined;
  LogIn: undefined;
  SignUp: undefined;
};

export type LoggedOutScreensProps = NavigationProp<LoggedOutScreensParamsTypes>;

const Stack = createNativeStackNavigator<LoggedOutScreensParamsTypes>();

export const NavigationLoggedOut: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeContainer} />
      <Stack.Screen name="LogIn" component={LogInContainer} />
      <Stack.Screen name="SignUp" component={SingUpContainer} />
    </Stack.Navigator>
  );
};
