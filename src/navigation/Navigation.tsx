import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeContainer} from '../screens/Home';
import {WelcomeContainer} from '../screens/Welcome';

export type StackParamListTypes = {
  Home: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<StackParamListTypes>();

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeContainer} />
        <Stack.Screen name="Home" component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
