import {
  Avatar,
  Checkbox,
  InteractionTag,
  InteractionTagPrimary,
  InteractionTagSecondary,
  Label,
  Link,
  Persona,
  Switch,
  SwitchOnChangeData,
  Theme,
  Tooltip,
  makeStyles,
  webLightTheme,
} from '@fluentui/react-components';
import { FluentProvider } from '@fluentui/react-components';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IInputs } from '../generated/ManifestTypes';
import useWebApiFetch, { UserData } from '../hooks/useWebApiFetch';
import { getTheme } from '../utils/theme';

export interface MySwitchProps {
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
  context: ComponentFramework.Context<IInputs> | null;
  onSwitchChange: (input: string | null) => void;
}

const useStyles = makeStyles({});

const MySwitch = ({
  textFieldSLOT,
  dateFormat,
  showTime,
  switchOrCheckbox,
  theme,
  context,
  onSwitchChange,
}: MySwitchProps) => {
  console.log('Showtime: ', showTime);

  const currentTheme = getTheme(theme);

  const { data, error, isLoading } = useWebApiFetch(context!);

  const [loggedInUser, setLoggedInUser] = useState<UserData>({
    fullName: '',
    img: '',
    userId: '',
  });

  const [switchData, setSwitchData] = useState<UserData | null>(null);

  useEffect(() => {
    console.log('Textfieldslot: ', textFieldSLOT);
    if (textFieldSLOT !== null) {
      const user: UserData = JSON.parse(textFieldSLOT);
      setSwitchData(user);
    }
  }, []);

  useEffect(() => {
    setLoggedInUser(data);
    console.log('data', data);
  }, [data]);

  const onChange = (): void => {
    // let switchChecked: boolean = !!checked;
    // onSwitchChange(checked ? 'on' : undefined)

    if (switchData === null) {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let hour = date.getHours();
      let minute = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
      // date.getMinutes().padStart(2, "0");

      let userData: UserData = {
        fullName: loggedInUser.fullName,
        img: loggedInUser.img,
        userId: loggedInUser.userId,
        timestamp: `${day}/${month + 1}/${year} @ ${hour}:${minute}`,
      };

      setSwitchData(userData);
      onSwitchChange(JSON.stringify(userData));
    } else {
      setSwitchData(null);
      onSwitchChange(null);
    }
  };

  const handleNameClick = (e: any) => {
    context?.navigation.openForm({
      entityName: 'systemuser',
      entityId: loggedInUser.userId,
    });
  };

  return (
    <FluentProvider theme={currentTheme}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '10px',
        }}
      >
        {switchOrCheckbox === 'Switch' ? (
          <Switch checked={switchData !== null} onChange={onChange} />
        ) : (
          <Checkbox checked={switchData !== null} onChange={onChange} />
        )}
        {switchData && (
          <>
            <InteractionTag shape='circular'>
              <InteractionTagPrimary
                onClick={handleNameClick}
                media={<Avatar name={switchData.fullName} color='colorful' />}
                secondaryText={
                  showTime
                    ? switchData.timestamp
                    : switchData.timestamp?.split('@')[0]
                }
              >
                {switchData.fullName}
              </InteractionTagPrimary>
            </InteractionTag>
          </>
        )}
      </div>
    </FluentProvider>
  );
};

export default MySwitch;
