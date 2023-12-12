import { useQuery } from 'react-query';
import { useSwitchContext } from '../services/SwitchContextProvider';
import { UserData } from '../types/UserData';
import { get } from 'http';
import { getUserData } from '../utils/UserUtils';

export const useUserData = () => {
  const { context } = useSwitchContext();
  const { data, isLoading, error } = useQuery<UserData, Error>(
    ['userData'],
    () => getUserData(context)
  );

  return { user: data, isLoading, error };
};
