import COLORS from '@/_styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  width: 80rem;
  padding: 2.1rem 2.4rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 381px;
  height: 56px;
  padding: 0.4rem 0 0.4rem 1.6rem;

  border: 1px solid black;
  border-radius: 4px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ListCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  padding: 1.4rem 3.2rem;
  border: 1px solid ${COLORS.GRAY30};
  border-radius: 4px;
`;
