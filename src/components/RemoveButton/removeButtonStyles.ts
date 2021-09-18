import {StyleSheet, ViewStyle} from 'react-native';

interface RemoveButtonStyles {
  removeButton: ViewStyle;
  icon: ViewStyle;
}

export const removeButtonStyles = StyleSheet.create<RemoveButtonStyles>({
  removeButton: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 360,
  },
  icon: {
    width: '58%',
    height: '58%',
  },
});
