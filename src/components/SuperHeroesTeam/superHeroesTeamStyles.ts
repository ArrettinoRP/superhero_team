import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface superHeroesTeamStyles {
  superHeroesTeamContainer: ViewStyle;
  teamContainer: ViewStyle;
  title: TextStyle;
  goodTeamSuperHeroesCardContainer: ViewStyle;
  badTeamSuperHeroesCardContainer: ViewStyle;
  teamInformationContainer: ViewStyle;
}

export const superHeroesTeamStyles = StyleSheet.create<superHeroesTeamStyles>({
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
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  teamInformationContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
});
