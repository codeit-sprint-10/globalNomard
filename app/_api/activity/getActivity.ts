import fetcher from '../api';
import { ActivityRes } from './activity.types';

export const getActivity = async (
  activityId: string,
): Promise<ActivityRes | undefined> => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    console.log({ accessToken });

    const response = await fetcher<ActivityRes, void>({
      url: `/activities/${activityId}`,
      method: 'GET',
    });
    return response?.data;
  } catch (error) {
    console.error(error);
  }
  return undefined;
};
