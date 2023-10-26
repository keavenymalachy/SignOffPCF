import {
  Theme,
  webLightTheme,
  webDarkTheme,
  teamsHighContrastTheme,
  teamsLightTheme,
  teamsDarkTheme,
} from '@fluentui/react-components';
import { MySwitchProps } from '../components/MySwitch';

// const themes = (name: MySwitchProps['theme']): Theme => {
//     'WebThemeLight': webLightTheme
// };

const themes: Record<MySwitchProps['theme'], Theme> = {
  WebLightTheme: webLightTheme,
  WebDarkTheme: webDarkTheme,
  TeamsLightTheme: teamsLightTheme,
  TeamsDarkTheme: teamsDarkTheme,
  TeamsHighContrastTheme: teamsHighContrastTheme,
};

export const getTheme = (name: MySwitchProps['theme']): Theme => {
  return themes[name];
};
