import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  transform: translateX(${(props) => -props.currentIndex * 100}%);
  transition: transform 0.3s ease;
`;
