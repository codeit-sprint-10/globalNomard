import { ReservationData } from './reservation.types';
import fetcher, { BASE_URL } from '../api';

export const patchCancelReservation = async (reservationId: number) => {
  const body = {
    status: 'canceled',
  };

  try {
    const response = await fetcher<ReservationData, void>({
      url: `${BASE_URL}/my-reservations/${reservationId}`,
      method: 'PATCH',
      data: body,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};
