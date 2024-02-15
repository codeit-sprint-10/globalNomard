import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled(Image)`
  width: 28.3rem;
  height: 28.3rem;

  object-fit: cover;
  border-radius: 2rem;

  margin-bottom: 1.6rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
