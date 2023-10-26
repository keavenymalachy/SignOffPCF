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
  showTooltip: boolean;
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
  showTooltip,
  theme,
  context,
  onSwitchChange,
}: MySwitchProps) => {
  const currentTheme = getTheme(theme);

  const { data, error, isLoading } = useWebApiFetch(context!);

  const [loggedInUser, setLoggedInUser] = useState<UserData>({
    fullName: '',
    img: '',
  });

  const [switchData, setSwitchData] = useState<UserData | null>(null);

  useEffect(() => {
    console.log('Textfieldslot: ', textFieldSLOT);
    if (textFieldSLOT !== null) {
      setSwitchData({
        fullName: textFieldSLOT.split(',')[0],
        img: textFieldSLOT.split(',')[1],
        timestamp: textFieldSLOT.split(',')[2],
      });
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

      setSwitchData({
        fullName: loggedInUser.fullName,
        img: loggedInUser.img,
        timestamp: `${day}/${month + 1}/${year} @ ${hour}:${minute}`,
      });

      // onSwitchChange(
      //   `${data.fullName}, ${data.img}, ${day}/${month}/${year} @ ${hour}:${minute}`
      // );

      onSwitchChange(
        `${loggedInUser.fullName},${loggedInUser.img},${day}/${
          month + 1
        }/${year} @ ${hour}:${minute}`
      );
    } else {
      setSwitchData(null);
      onSwitchChange(null);
    }
  };

  const handleNameClick = (e: any) => {
    context?.navigation.openForm({
      entityName: 'systemuser',
      entityId: context.userSettings.userId,
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
            {/* <Persona
              name={switchData.fullName}
              primaryText={
                <Tooltip
                  content={switchData.fullName}
                  relationship='description'
                >
                  <Link onClick={handleNameClick}>{switchData.fullName}</Link>
                </Tooltip>
              }
              secondaryText={switchData.timestamp}
              avatar={{
                image: {
                  src: switchData.img,
                },
              }}
            /> */}
            {/* <Avatar name={switchData.fullName} color='colorful' size={28} />
            <div
              style={{
                marginLeft: '0.5em',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Tooltip content={switchData.fullName} relationship='description'>
                <Link style={{ fontWeight: 'bold' }} onClick={handleNameClick}>
                  {switchData.fullName}
                </Link>
              </Tooltip>
              <Label size='small' style={{ color: 'gray' }}>
                {switchData.timestamp}
              </Label>
            </div> */}
            <InteractionTag shape='circular'>
              <Tooltip content={switchData.fullName} relationship='description'>
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
              </Tooltip>
            </InteractionTag>
          </>
        )}
      </div>
    </FluentProvider>
  );
};

export default MySwitch;
