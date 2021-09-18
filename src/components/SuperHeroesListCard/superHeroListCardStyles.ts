import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

type superHeroListCardStylesTypes = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  informationContainer: ViewStyle;
  name: TextStyle;
  actionButtonContainer: ViewStyle;
  tagContainer: ViewStyle;
};

export const superHeroListCardWidth = 370;
export const superHeroListCardMargin = 5;

export const superHeroListCardStyles =
  StyleSheet.create<superHeroListCardStylesTypes>({
    container: {
      height: 75,
      borderRadius: 15,
      alignItems: 'center',
      flexDirection: 'row',
      minWidth: superHeroListCardWidth,
      backgroundColor: '#fff',
      marginTop: 10,
      marginHorizontal: superHeroListCardMargin,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 52,
      height: 52,
      borderRadius: 360,
    },
    informationContainer: {
      flex: 4,
      paddingLeft: 10,
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
    tagContainer: {flexDirection: 'row', marginTop: 3},
    actionButtonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
