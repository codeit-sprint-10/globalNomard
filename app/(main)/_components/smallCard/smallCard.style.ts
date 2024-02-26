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

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Rate = styled.div`
  color: var(--black-90, #1b1b1b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const ReviewCount = styled.div`
  color: var(--gray-55, #a1a1a1);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
