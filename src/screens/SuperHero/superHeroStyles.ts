import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface superHeroStylesTypes {
  imageContainer: ViewStyle;
  informationCard: ViewStyle;
  informationCardRow: ViewStyle;
  informationCardRow1Container: ViewStyle;
  informationCardRow1: ViewStyle;
  informationCardRow2: ViewStyle;
  title: TextStyle;
  basicInformationCardContainer: ViewStyle;
  appearanceCardContainer: ViewStyle;
  addButtonContainer: ViewStyle;
}

export const superHeroStyles = StyleSheet.create<superHeroStylesTypes>({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  informationCard: {},
  informationCardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  informationCardRow1Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  informationCardRow1: {
    width: '90%',
    flexDirection: 'row',
  },
  basicInformationCardContainer: {
    flex: 1,
  },
  appearanceCardContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  informationCardRow2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: '4%',
    right: '5%',
  },
});
