import SwitchArgs from './SwitchContext';
import { useContext, createContext } from 'react';
import * as React from 'react';

export interface UseContextProps {
  switchArgs: SwitchArgs;
  children: React.ReactNode;
}

const SwitchContext = createContext<SwitchArgs>(undefined!);

export const SwitchContextProvider = ({
  switchArgs,
  children,
}: UseContextProps) => {
  return (
    <SwitchContext.Provider value={switchArgs}>
      {children}
    </SwitchContext.Provider>
  );
};

export const useSwitchContext = () => {
  return useContext(SwitchContext);
};
