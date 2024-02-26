/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReservationData, ReservationSort } from './reservation.types';
import fetcher, { BASE_URL } from '../api';

export const getReservations = async (
  status?: ReservationSort['sort'],
): Promise<ReservationData | undefined> => {
  try {
    // const accessToken = localStorage.getItem('accessToken');
    // console.log({ accessToken });
    // const response = await axios.get(`${BASE_URL}/my-reservations`, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    const response = await fetcher<ReservationData, void>({
      url: `${BASE_URL}/my-reservations`,
      method: 'GET',
      params: { status },
    });
    console.log(response.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
