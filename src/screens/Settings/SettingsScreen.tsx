import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {settingsStyles} from './settingsStyles';

interface SettingsScreenPropsTypes {
  onPressLogOut: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenPropsTypes> = ({
  onPressLogOut,
}) => {
  return (
    <View style={settingsStyles.settingsContainer}>
      <View style={settingsStyles.settingsMenu}>
        <Pressable onPress={onPressLogOut}>
          <Text style={settingsStyles.linkText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
};
