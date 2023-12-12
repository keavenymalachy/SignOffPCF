import { createContext } from 'react';
import { IInputs } from '../generated/ManifestTypes';
import * as React from 'react';

type SwitchArgs = {
  textFieldSLOT: string | null;
  dateFormat: string;
  showTime: boolean;
  switchOrCheckbox: string;
  theme:
    | 'WebLightTheme'
    | 'WebDarkTheme'
    | 'TeamsLightTheme'
    | 'TeamsDarkTheme'
    | 'TeamsHighContrastTheme';
  context: ComponentFramework.Context<IInputs>;
  onSwitchChange: (input: string | null) => void;
};

export default SwitchArgs;
