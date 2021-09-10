import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListContainer} from '../screens/List';
import {SuperHeroContainer} from '../screens/SuperHero';
import {HomeContainer} from '../screens/Home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faList, faCog} from '@fortawesome/free-solid-svg-icons';
import {SettingsContainer} from '../screens/Settings/SettingsContainer';

export type LoggedInScreensParamsTypes = {
  Menu: NavigatorScreenParams<MenuParamsTypes>;
  SuperHero: {id: number};
};

export type MenuParamsTypes = {
  Home: undefined;
  List: undefined;
  Settings: undefined;
};

export type LoggedInScreensProps = NavigationProp<LoggedInScreensParamsTypes>;

const Stack = createNativeStackNavigator<LoggedInScreensParamsTypes>();
const Tab = createBottomTabNavigator<MenuParamsTypes>();

export const NavigationLoggedIn: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SuperHero" component={SuperHeroContainer} />
    </Stack.Navigator>
  );
};

const Menu: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon size={size} color={color} icon={faHome} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListContainer}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon size={size} color={color} icon={faList} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsContainer}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon size={size} color={color} icon={faCog} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
