import React from 'react';
import {
  NavigationContainer,
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationLoggedIn,
  LoggedInScreensParamsTypes,
} from './NavigationLoggedIn';

import {
  LoggedOutScreensParamsTypes,
  NavigationLoggedOut,
} from './NavigationLoggedOut';
import {SplashContianer} from '../screens/Splash/SplashContainer';

export type MainScreensParamsTypes = {
  Splash: undefined;
  LoggedOut: NavigatorScreenParams<LoggedOutScreensParamsTypes>;
  LoggedIn: NavigatorScreenParams<LoggedInScreensParamsTypes>;
};

export type MainScreensProps = NavigationProp<MainScreensParamsTypes>;

const Stack = createNativeStackNavigator<MainScreensParamsTypes>();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashContianer} />
        <Stack.Screen name="LoggedOut" component={NavigationLoggedOut} />
        <Stack.Screen name="LoggedIn" component={NavigationLoggedIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
