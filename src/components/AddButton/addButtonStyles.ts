import {StyleSheet, ViewStyle} from 'react-native';

interface AddButtonStylesTypes {
  addButton: ViewStyle;
  icon: ViewStyle;
}

export const addButtonStyles = StyleSheet.create<AddButtonStylesTypes>({
  addButton: {
    backgroundColor: '#2196F3',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 360,
  },
  icon: {
    width: '65%',
    height: '65%',
  },
});
