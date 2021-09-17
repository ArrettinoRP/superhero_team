import React from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, View, Text} from 'react-native';
import {settingsStyles} from './settingsStyles';

interface SettingsScreenPropsTypes {
  onPressLogOut: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenPropsTypes> = ({
  onPressLogOut,
}) => {
  const {t} = useTranslation();
  return (
    <View style={settingsStyles.settingsContainer}>
      <View style={settingsStyles.settingsMenu}>
        <Pressable onPress={onPressLogOut}>
          <Text style={settingsStyles.linkText}>{t('Log Out')}</Text>
        </Pressable>
      </View>
    </View>
  );
};
