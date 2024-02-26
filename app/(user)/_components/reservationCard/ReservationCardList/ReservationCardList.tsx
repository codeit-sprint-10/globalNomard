import { ReservationData } from '@/_api/reservation/reservation.types';
import React from 'react';
import ReservationCard from '../ReservationCard';

function ReservationCardList({ data }: { data?: ReservationData }) {
  return (
    <div>
      {data?.reservations?.map((item) => (
        <ReservationCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ReservationCardList;
