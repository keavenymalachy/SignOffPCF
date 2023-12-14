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
import { getTheme } from '../utils/theme';
import { useSwitchContext } from '../services/SwitchContextProvider';
import { useUserData } from '../hooks/useUserData';
import { UserData } from '../types/UserData';

// export interface MySwitchProps {
//   textFieldSLOT: string | null;
//   dateFormat: string;
//   showTime: boolean;
//   switchOrCheckbox: string;
//   theme:
//     | 'WebLightTheme'
//     | 'WebDarkTheme'
//     | 'TeamsLightTheme'
//     | 'TeamsDarkTheme'
//     | 'TeamsHighContrastTheme';
//   context: ComponentFramework.Context<IInputs> | null;
//   onSwitchChange: (input: string | null) => void;
// }

const useStyles = makeStyles({});

const MySwitch = (): React.JSX.Element => {
  const {
    textFieldSLOT,
    dateFormat,
    showTime,
    switchOrCheckbox,
    theme,
    context,
    onSwitchChange,
    disabled,
  } = useSwitchContext();

  console.log('Showtime: ', showTime);

  const currentTheme = getTheme(theme);

  // const { data, error, isLoading } = useWebApiFetch(context!);

  const { user, isLoading, error } = useUserData();

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
    setLoggedInUser(user as UserData);
    console.log('data: ', user);
  }, [user]);

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

  const renderSecondaryText = (): string => {
    let formattedTimestamp: string = '';

    if (switchData && switchData.timestamp) {
      if (dateFormat === 'UK') {
        formattedTimestamp = `${switchData.timestamp.split('/')[0]}/${
          switchData?.timestamp.split('/')[1]
        }/${switchData?.timestamp.split('/')[2]}`;
      } else {
        formattedTimestamp = `${switchData.timestamp.split('/')[1]}/${
          switchData?.timestamp.split('/')[0]
        }/${switchData?.timestamp.split('/')[2]}`;
      }
    }

    return showTime ? formattedTimestamp : formattedTimestamp.split('@')[0];
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
          <Switch
            checked={switchData !== null}
            onChange={onChange}
            disabled={disabled}
          />
        ) : (
          <Checkbox
            checked={switchData !== null}
            onChange={onChange}
            disabled={disabled}
          />
        )}
        {switchData && (
          <>
            <InteractionTag shape='circular' disabled={disabled}>
              <InteractionTagPrimary
                onClick={handleNameClick}
                media={
                  <Avatar
                    name={switchData.fullName}
                    color='colorful'
                    image={{ src: switchData.img }}
                  />
                }
                secondaryText={renderSecondaryText()}
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
