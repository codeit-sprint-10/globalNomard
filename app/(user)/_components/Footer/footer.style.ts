import COLORS from '@/_styles/colors';
import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
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
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    padding: 3.2rem 3.9rem 0;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 120rem;
  width: 100%;
  gap: 1.2rem;
  justify-content: space-between;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    flex-direction: column;
  }
`;

export const FooterInnerContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const IconBox = styled.div`
  &:hover {
    background-color: skyblue;
    color: blue;
  }
  display: flex;
  gap: 1.2rem;
`;
