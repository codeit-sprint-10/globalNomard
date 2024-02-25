/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from '@/_styles/constants';
import axios from 'axios';
import { ReservationData } from './reservation.types';

export const getReservations = async (): Promise<
  ReservationData | undefined
> => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    console.log({ accessToken });
    const response = await axios.get(`${BASE_URL}/my-reservations`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
