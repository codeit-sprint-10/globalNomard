import styled, { css } from 'styled-components';

const arrowInactive = css`
  opacity: 55%;

  &:hover {
    background-color: #ffffff;
    cursor: not-allowed;
  }
`;

export const StyledArrowButton = styled.button<{ $type: string; $isNotActive: boolean }>`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: black;

  ${({ $isNotActive }) => ($isNotActive ? arrowInactive : null)}
`;
