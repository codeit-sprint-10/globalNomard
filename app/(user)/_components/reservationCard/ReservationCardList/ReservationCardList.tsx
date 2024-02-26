import { getReservations } from '@/_api/reservation/getReservations';
import { ReservationData } from '@/_api/reservation/reservation.types';
import React, { useEffect, useState } from 'react';
import ReservationCard from '../ReservationCard';

function ReservationCardList() {
  const [data, setData] = useState<ReservationData | undefined>();

  const getData = async () => {
    const res = await getReservations();
    setData(res);
  };
  // state
  // ReservationCard
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data?.reservations?.map((item) => (
        <ReservationCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ReservationCardList;
