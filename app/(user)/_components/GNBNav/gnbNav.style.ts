import COLORS from '@/_styles/colors';
import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 192rem;
  width: 100%;
  height: 16rem;
  background-color: ${COLORS.BLACK50};
  color: ${COLORS.GRAY75};
  padding: 3.2rem 11.1rem 0;
  white-space: nowrap;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    background-color: yellow;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    background-color: red;
    padding: 3.2rem 3.9rem 0;
  }
`;

export const MenuWrapper = styled.div``;
