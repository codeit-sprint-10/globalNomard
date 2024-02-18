import Image from 'next/image';
import styled from 'styled-components';

interface ListContainerProps {
  currentIndex: number;
}

export const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  flex-direction: row;

  transform: translate(${(props) => props.currentIndex * (100 + 2.4)}%);
  transition: transform 0.3s ease;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 55rem;
  margin-bottom: 15.8rem;
  position: relative;
  z-index: 10;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 33.33%,
    rgba(0, 0, 0, 0.8) 91.67%
  );
`;

export const Background = styled(Image)`
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  position: relative;
  z-index: 20;
  color: white;

  padding-top: 15.9rem;
  padding-left: 35.8rem;
`;

export const Title = styled.div`
  width: 50.2rem;
  height: 16.2rem;
  margin-bottom: 2rem;
`;
