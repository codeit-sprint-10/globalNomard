import COLORS from '@/_styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;

  width: 80rem;
  padding: 2.1rem 2.4rem;

  border-radius: 1rem;
  box-shadow: 1px 2px 6px 0px #00000040;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.2rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Blue = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: #0085ff;
`;

export const Beige = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: #fff4e8;
`;

export const Gray = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: #ddd;
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
  margin: 2rem 0;

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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  width: 15rem;
`;
