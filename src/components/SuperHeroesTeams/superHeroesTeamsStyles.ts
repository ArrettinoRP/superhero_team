import {StyleSheet, TextStyle, ViewStyle, PixelRatio} from 'react-native';

interface superHeroesTeamsStyles {
  superHeroesTeamContainer: ViewStyle;
  teamContainer: ViewStyle;
  title: TextStyle;
  goodTeamSuperHeroesCardContainer: ViewStyle;
  badTeamSuperHeroesCardContainer: ViewStyle;
  teamInformationContainer: ViewStyle;
  powerstatsCardContainer: ViewStyle;
  bodyConstitutionCardContainer: ViewStyle;
}

export const superHeroesTeamsStyles = StyleSheet.create<superHeroesTeamsStyles>(
  {
    superHeroesTeamContainer: {
      flexDirection: 'column',
    },
    teamContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    title: {
      alignSelf: 'center',
      fontSize: 18,
      marginTop: 10,
    },
    goodTeamSuperHeroesCardContainer: {
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    badTeamSuperHeroesCardContainer: {
      paddingTop: PixelRatio.getPixelSizeForLayoutSize(30),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    teamInformationContainer: {
      flexDirection: 'row',
      paddingLeft: 20,
    },
    powerstatsCardContainer: {
      flex: 1,
    },
    bodyConstitutionCardContainer: {
      flex: 1,
    },
  },
);
