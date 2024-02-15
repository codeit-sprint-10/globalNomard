import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 120.4rem;
  margin: 0 auto 7.2rem;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 4.8rem;
  column-gap: 2.4rem;
`;
