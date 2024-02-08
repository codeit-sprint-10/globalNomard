/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Image from 'next/image';
import COLORS from '@/_styles/colors';

export const Container = styled.div`
  width: 38.4rem;
  height: 38.4rem;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 38.4rem;
  height: 38.4rem;
  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2rem;
  position: relative;
  z-index: 10;

  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 33.33%,
    rgba(0, 0, 0, 0.8) 91.67%
  );
`;

export const Background = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 20px;
`;

export const Point = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  color: ${COLORS.WHITE10};
`;

export const Title = styled.div`
  width: 23rem;
  height: 7.2rem;
  color: ${COLORS.WHITE10};
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: ${COLORS.WHITE10};
`;

export const Span = styled.div`
  color: ${COLORS.GRAY55};
`;
