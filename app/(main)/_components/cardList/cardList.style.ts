import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 120rem;
  margin: 0 auto 6rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.3rem;
`;

export const Arrow = styled.div`
  width: 4.4rem;

  display: flex;
  flex-direction: row;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;

  overflow: hidden;
`;

export const ListContainer = styled.div<{ currentIndex: number }>`
  transform: translateX(${(props) => -props.currentIndex * (100 + 6.2)}%);
  transition: transform 0.3s ease;
`;
