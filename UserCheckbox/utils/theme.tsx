import {
  Theme,
  webLightTheme,
  webDarkTheme,
  teamsHighContrastTheme,
  teamsLightTheme,
  teamsDarkTheme,
} from '@fluentui/react-components';
import SwitchArgs from '../services/SwitchContext';

// const themes = (name: MySwitchProps['theme']): Theme => {
//     'WebThemeLight': webLightTheme
// };

const themes: Record<SwitchArgs['theme'], Theme> = {
  WebLightTheme: webLightTheme,
  WebDarkTheme: webDarkTheme,
  TeamsLightTheme: teamsLightTheme,
  TeamsDarkTheme: teamsDarkTheme,
  TeamsHighContrastTheme: teamsHighContrastTheme,
};

export const getTheme = (name: SwitchArgs['theme']): Theme => {
  return themes[name];
};
