import { useEffect, useState } from 'react';
import { IInputs } from '../generated/ManifestTypes';

export interface UserData {
  fullName: string;
  img: string;
  timestamp?: string;
}

const useWebApiFetch = (context: ComponentFramework.Context<IInputs>) => {
  const [data, setData] = useState<UserData>({ fullName: '', img: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userId = context.userSettings.userId.replace(/[{}]/g, '');

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await context.webAPI.retrieveRecord(
          'systemuser',
          userId,
          '?$select=entityimage_url'
        );
        if (isMounted) {
          setData({
            fullName: context.userSettings.userName,
            img: result.entityimage_url,
          });
          setError(null);
        }
      } catch (error: any) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
      setIsLoading(false);
    };

    fetchData();

    const cleanUp = () => {
      isMounted = false;
    };

    return cleanUp;
  }, [userId]);

  return { data, error, isLoading };
};

export default useWebApiFetch;
