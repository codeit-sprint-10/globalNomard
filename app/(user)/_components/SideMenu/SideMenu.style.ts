import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 38.4rem;
  height: 43.2rem;
  border-radius: 12px;
  border: 1px solid #dddddd;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    width: 25.1rem;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    display: none;
  }
`;
