import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

type superHeroListCardStylesTypes = {
  container: ViewStyle;
  image: ImageStyle;
  informationContainer: ViewStyle;
  name: TextStyle;
};

export const superHeroListCardWidth = 380;
export const superHeroListCardMargin = 5;

export const superHeroListCardStyles =
  StyleSheet.create<superHeroListCardStylesTypes>({
    container: {
      height: 75,
      borderRadius: 15,
      alignItems: 'center',
      flexDirection: 'row',
      minWidth: superHeroListCardWidth,
      width: superHeroListCardWidth,
      backgroundColor: '#fff',
      marginTop: 10,
      marginHorizontal: superHeroListCardMargin,
    },
    image: {
      width: 52,
      height: 52,
      borderRadius: 360,
      marginLeft: 12,
      marginRight: 14.3,
    },
    informationContainer: {
      width: 245,
      height: 52,
      justifyContent: 'flex-start',
    },
    name: {
      fontFamily: 'Roboto',
      fontSize: 17,
      fontWeight: 'bold',
      lineHeight: 18,
      color: '#000',
      marginTop: 5.5,
      marginLeft: 5.5,
    },
  });
