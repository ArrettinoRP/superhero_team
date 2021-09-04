import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface tagStylesTypes {
  tag: ViewStyle;
  tagText: TextStyle;
}

export const tagStyles = StyleSheet.create<tagStylesTypes>({
  tag: {
    height: 25,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    borderRadius: 360,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  tagText: {
    fontSize: 15,
  },
});
