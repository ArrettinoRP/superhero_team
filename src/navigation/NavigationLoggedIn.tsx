import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListContainer} from '../screens/List';
import {SuperHeroContainer} from '../screens/SuperHero';
import {HomeContainer} from '../screens/Home';

export type LoggedInScreensParamsTypes = {
  Menu: NavigatorScreenParams<MenuParamsTypes>;
  SuperHero: {id: number};
};

export type MenuParamsTypes = {
  Home: undefined;
  List: undefined;
};

export type LoggedInScreensProps = NavigationProp<LoggedInScreensParamsTypes>;

const Stack = createNativeStackNavigator<LoggedInScreensParamsTypes>();
const Tab = createBottomTabNavigator<MenuParamsTypes>();

export const NavigationLoggedIn: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="SuperHero" component={SuperHeroContainer} />
    </Stack.Navigator>
  );
};

const Menu: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="List" component={ListContainer} />
    </Tab.Navigator>
  );
};
