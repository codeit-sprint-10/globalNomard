'use client';

import * as S from './reservationList.style';
import React from 'react';
import { Text, TextType } from '@/_styles/Text';
import ReservationCardList from '@/(user)/_components/ReservationCard/ReservationCardList/ReservationCardList';
import ReservationDropdown from '@/(user)/_components/ReservationDropdown/ReservationDropdown';

export default function reservationList() {
  return (
    <S.Container>
      <S.DropdownContainer>
        <Text $normalType={TextType.Pre22} text="예약 내역" />
        <ReservationDropdown />
      </S.DropdownContainer>
      <S.ReservationCardWrapper>
        <ReservationCardList />
      </S.ReservationCardWrapper>
    </S.Container>
  );
}
