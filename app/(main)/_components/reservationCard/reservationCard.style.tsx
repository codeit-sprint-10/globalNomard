import COLORS from '@/_styles/colors';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 24px;
  border-radius: 24px;
  background: ${COLORS.WHITE10};
`;

export const ThumbImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2.4rem;
`;
