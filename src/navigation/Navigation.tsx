import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeContainer} from '../screens/Home';
import {WelcomeContainer} from '../screens/Welcome';
import {SuperHeroContainer} from '../screens/SuperHero';

export type StackScreensListTypes = {
  Home: undefined;
  Welcome: undefined;
  SuperHero: {id: number};
};
export type MainScreenProp = NavigationProp<StackScreensListTypes>;

const Stack = createNativeStackNavigator<StackScreensListTypes>();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeContainer} />
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="SuperHero" component={SuperHeroContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
