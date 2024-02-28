import fetcher from '../api';
import { ActivityRes } from './getMyActivityReservation.type';

export const getMyActivityReservation = async (
  activityId: number,
  year: number,
  month: number,
): Promise<ActivityRes | undefined> => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    console.log({ accessToken });

    const response = await fetcher<ActivityRes, void>({
      url: `my-activities/${activityId}/reservation-dashboard?year=${year}&month=${month}`,
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
