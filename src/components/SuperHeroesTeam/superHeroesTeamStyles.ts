import {StyleSheet, ViewStyle} from 'react-native';

interface superHeroesTeamStyles {
  superHeroesTeamContainer: ViewStyle;
  teamContainer: ViewStyle;
  goodTeamSuperHeroesCardContainer: ViewStyle;
  badTeamSuperHeroesCardContainer: ViewStyle;
  teamInformationContainer: ViewStyle;
}

export const superHeroesTeamStyles = StyleSheet.create<superHeroesTeamStyles>({
  superHeroesTeamContainer: {
    flexDirection: 'row',
  },
  teamContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  goodTeamSuperHeroesCardContainer: {
    paddingTop: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  badTeamSuperHeroesCardContainer: {
    paddingTop: 30,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  teamInformationContainer: {
    alignItems: 'center',
  },
});
