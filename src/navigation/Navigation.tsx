import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListContainer} from '../screens/List';
import {WelcomeContainer} from '../screens/Welcome';
import {SuperHeroContainer} from '../screens/SuperHero';

export type StackScreensListTypes = {
  List: undefined;
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
        <Stack.Screen name="List" component={ListContainer} />
        <Stack.Screen name="SuperHero" component={SuperHeroContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
