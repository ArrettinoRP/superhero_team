import React from 'react';
import {
  NavigationContainer,
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeContainer} from '../screens/Welcome';
import {NavigationLoggedIn} from './NavigationLoggedIn';
import {LoggedInScreensParamsTypes} from './NavigationLoggedIn';

export type MainScreensParamsTypes = {
  Welcome: undefined;
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
        <Stack.Screen name="Welcome" component={WelcomeContainer} />
        <Stack.Screen name="LoggedIn" component={NavigationLoggedIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
