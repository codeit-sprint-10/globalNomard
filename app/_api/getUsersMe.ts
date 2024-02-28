import fetcher, { BASE_URL } from './api';
import { ReservationData } from './reservation/reservation.types';

export const getUsersMe = async () => {
  try {
    const response = await fetcher<ReservationData, void>({
      url: `${BASE_URL}/users/me`,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
