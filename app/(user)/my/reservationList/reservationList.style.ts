import COLORS from '@/_styles/colors';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;

export const ReservationCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
