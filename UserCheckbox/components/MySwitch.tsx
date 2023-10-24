import {
  Avatar,
  Persona,
  Switch,
  SwitchOnChangeData,
  makeStyles,
  webLightTheme,
} from '@fluentui/react-components';
import { FluentProvider } from '@fluentui/react-components';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { IInputs } from '../generated/ManifestTypes';
import useWebApiFetch, { UserData } from '../hooks/useWebApiFetch';
import { text } from 'stream/consumers';
import { log } from 'console';

export interface MySwitchProps {
  textFieldSLOT: string | null;
  context: ComponentFramework.Context<IInputs> | null;
  onSwitchChange: (input: string | null) => void;
}

const useStyles = makeStyles({});

const MySwitch = ({
  textFieldSLOT,
  context,
  onSwitchChange,
}: MySwitchProps) => {
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

  const onChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    { checked }: SwitchOnChangeData
  ): void => {
    let switchChecked: boolean = !!checked;
    // onSwitchChange(checked ? 'on' : undefined)
    if (switchChecked) {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let hour = date.getHours();
      let minute = date.getMinutes();

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

  return (
    <FluentProvider theme={webLightTheme}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '10px',
        }}
      >
        <Switch checked={switchData !== null} onChange={onChange} />
        {switchData && (
          <>
            <Persona
              name={switchData.fullName}
              secondaryText={switchData.timestamp}
              avatar={{
                image: {
                  src: switchData.img,
                },
              }}
            />
          </>
        )}
      </div>
    </FluentProvider>
  );
};

export default MySwitch;
