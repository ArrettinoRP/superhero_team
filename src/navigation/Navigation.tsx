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
import {useSelector} from 'react-redux';
import {Store} from '../types';

export type MainScreensParamsTypes = {
  LoggedOut: NavigatorScreenParams<LoggedOutScreensParamsTypes>;
  LoggedIn: NavigatorScreenParams<LoggedInScreensParamsTypes>;
};

export type MainScreensProps = NavigationProp<MainScreensParamsTypes>;

const Stack = createNativeStackNavigator<MainScreensParamsTypes>();

export const Navigation: React.FC = () => {
  const loggedIn = useSelector((state: Store) => state.auth.loggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {loggedIn ? (
          <Stack.Screen name="LoggedIn" component={NavigationLoggedIn} />
        ) : (
          <Stack.Screen name="LoggedOut" component={NavigationLoggedOut} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
