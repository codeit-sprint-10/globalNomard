'use client';

import * as S from './reservationList.style';
import { Text, TextType } from '@/_styles/Text';
import ReservationCardList from '@/(user)/_components/reservationCard/ReservationCardList/ReservationCardList';
import ReservationDropdown from '@/(user)/_components/ReservationDropdown/ReservationDropdown';
import { useEffect, useState } from 'react';
import { SORT_OPTIONS } from '@/_constants/reservation';
import {
  ReservationData,
  ReservationSort,
} from '@/_api/reservation/reservation.types';
import { getReservations } from '@/_api/reservation/getReservations';

export default function ReservationList() {
  const [sortOption, setSortOption] = useState('');

  const [data, setData] = useState<ReservationData | undefined>();

  const getData = async (status?: ReservationSort['sort']) => {
    const res = await getReservations(status);
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!sortOption) return;
    const status = SORT_OPTIONS.find(
      (option) => option.text === sortOption,
    )?.sort;
    getData(status);
  }, [sortOption]);

  return (
    <S.Container>
      <S.DropdownContainer>
        <Text $normalType={TextType.Pre22} text="예약 내역" />
        <ReservationDropdown
          sortOption={sortOption}
          setSortOption={setSortOption}
          SORT_OPTIONS={SORT_OPTIONS}
        />
      </S.DropdownContainer>
      <S.ReservationCardWrapper>
        <ReservationCardList data={data} />
      </S.ReservationCardWrapper>
    </S.Container>
  );
}
