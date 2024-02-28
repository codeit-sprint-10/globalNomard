import { ReservationData } from '@/_api/reservation/reservation.types';
import React from 'react';
import ReservationCard from '../ReservationCard';
import * as S from './reservationCardList.style';

function ReservationCardList({ data }: { data?: ReservationData }) {
  return (
    <S.Wrapper>
      {data?.reservations?.map((item) => (
        <ReservationCard key={item.id} data={item} />
      ))}
    </S.Wrapper>
  );
}

export default ReservationCardList;
