import COLORS from '@/_styles/colors';
import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${COLORS.BLACK50};
  color: ${COLORS.GRAY75};

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    background-color: yellow;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    background-color: red;
  }
`;
