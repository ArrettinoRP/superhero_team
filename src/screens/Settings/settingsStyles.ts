import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface settingsStylesTypes {
  settingsContainer: ViewStyle;
  settingsMenu: ViewStyle;
  linkText: TextStyle;
}

export const settingsStyles = StyleSheet.create<settingsStylesTypes>({
  settingsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  settingsMenu: {
    width: '70%',
    alignItems: 'flex-start',
    paddingTop: 30,
  },
  linkText: {
    color: '#025dbf',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
