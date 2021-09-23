import {useColorScheme} from 'react-native';

type Theme = {
  primaryBackground: string;
  secondaryBackground: string;
  primary: string;
  card: string;
  border: string;
  primaryText: string;
  secondaryText: string;
};

export const useTheme = () => {
  const scheme = useColorScheme();
  const darkTheme: Theme = {
    primaryBackground: 'rgb(0, 0, 0)',
    secondaryBackground: 'rgb(48,48,48)',
    primary: 'rgb(0, 134, 240)',
    card: 'rgb(255, 255, 255)',
    border: 'rgb(48,48,48)',
    primaryText: 'rgba(33, 33, 33, 1)',
    secondaryText: 'rgb(125, 125, 125)',
  };
  const lightTheme: Theme = {
    primaryBackground: 'rgba(255, 255, 255)',
    secondaryBackground: 'rgb(248,248,248)',
    primary: 'rgb(0, 134, 240)',
    card: 'rgb(255, 255, 255)',
    border: 'rgb(48,48,48)',
    primaryText: 'rgba(33, 33, 33, 1)',
    secondaryText: 'rgb(125, 125, 125)',
  };

  return {colors: scheme === 'dark' ? darkTheme : lightTheme};
};
