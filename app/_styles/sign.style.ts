import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 64rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 744px) {
    width: 100%;
    padding: 0 5.5rem;
  }

  @media (max-width: 375px) {
    width: 35rem;
  }
`;

export const Logo = styled(Image)`
  width: 34rem;
  height: 19.2rem;
  margin: 0 auto;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Info = styled.div`
  size: 1.6rem;
  color: #4b4b4b;
  text-align: center;
`;

export const Span = styled.span`
  size: 1.6rem;
  color: #0b3b2d;
  text-decoration: underline;
  cursor: pointer;
`;
