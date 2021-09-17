import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListContainer} from '../screens/List';
import {SuperHeroContainer} from '../screens/SuperHero';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faList, faCog} from '@fortawesome/free-solid-svg-icons';
import {SettingsContainer} from '../screens/Settings/SettingsContainer';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon size={size} color={color} icon={faHome} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="List"
        component={ListContainer}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon size={size} color={color} icon={faList} />
          ),
          tabBarLabel: t('List'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsContainer}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon size={size} color={color} icon={faCog} />
          ),
          tabBarLabel: t('Settings'),
        }}
      />
    </Tab.Navigator>
  );
};
