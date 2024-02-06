import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledMenu = styled.button`
  display: flex;
  gap: 14px;
  opacity: 40%;
  background: #ffffff;
  padding: 9px 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  border-radius: 12px;

  &:hover,
  &:focus {
    background: #ced8d5;
    opacity: 100%;
  }
`;
