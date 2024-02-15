import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 7rem;
  white-space: nowrap;
  padding: 0 2.4rem;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 120rem;
  width: 100%;
  gap: 5rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
`;
