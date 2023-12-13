import * as React from 'react';
import SwitchArgs from '../services/SwitchContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SwitchContextProvider } from '../services/SwitchContextProvider';
import MySwitch from './MySwitch';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      // Shoutout to David Rivard for this tip, this is important for PCFs as we don't want the data to refresh everytime the PCF loses focus
      //https://react-query.tanstack.com/guides/window-focus-refetching#_top
    },
  },
});

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const UserCheckboxApp = (switchArgs: SwitchArgs): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <SwitchContextProvider switchArgs={switchArgs}>
        <MySwitch />
      </SwitchContextProvider>
    </QueryClientProvider>
  );
};

export default UserCheckboxApp;
