import {StyleSheet, ViewStyle} from 'react-native';

interface ProgressBarStyles {
  container: ViewStyle;
  filler: ViewStyle;
}

export const progressBarStyles = StyleSheet.create<ProgressBarStyles>({
  container: {
    height: 10,
    width: '80%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  },
  filler: {
    height: '100%',
    alignItems: 'flex-end',
    borderRadius: 50,
  },
});
