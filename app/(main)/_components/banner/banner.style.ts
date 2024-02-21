import Image from 'next/image';
import styled from 'styled-components';

// Banner
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ListContainer = styled.div<{ currentIndex: number }>`
  width: 100vw;
  transform: translateX(${(props) => -props.currentIndex * 100}%);
  transition: transform 0.3s ease;

  overflow: hidden;
`;

// BannerItem
export const Wrapper = styled.div`
  width: 100vw;
  height: 55rem;
  margin-bottom: 15.8rem;
  /* position: relative; */
  /* z-index: 10; */

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 33.33%,
    rgba(0, 0, 0, 0.8) 91.67%
  );
`;

export const Background = styled(Image)`
  width: 100%;
  object-fit: cover;
  /* position: absolute; */
  /* z-index: 1; */
`;

export const TextWrapper = styled.div`
  /* position: relative; */
  /* z-index: 20; */
  color: white;

  padding-top: 15.9rem;
  padding-left: 35.8rem;
`;

export const Title = styled.div`
  width: 50.2rem;
  height: 16.2rem;
  margin-bottom: 2rem;
`;
