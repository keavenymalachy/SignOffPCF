import { IInputs } from '../generated/ManifestTypes';
import { useSwitchContext } from '../services/SwitchContextProvider';
import { UserData } from '../types/UserData';

export const getUserData = async (
  context: ComponentFramework.Context<IInputs>
): Promise<UserData> => {
  const userId = context.userSettings.userId.replace(/[{}]/g, '');

  const result = await context.webAPI.retrieveRecord(
    'systemuser',
    userId,
    '?$select=entityimage_url'
  );

  let userName: string = context.userSettings.userName;
  let userImg: string;

  console.log(`Username: ${userName} and UserId: ${userId}`);

  if (result.entityimage_url == null) {
    userImg = '';
  } else {
    userImg = result.entityimage_url;
  }

  return {
    fullName: userName,
    img: userImg,
    userId: context.userSettings.userId,
  };
};
