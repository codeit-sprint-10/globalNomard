import COLORS from '@/_styles/colors';
import styled from 'styled-components';
import arrowDown from '@/assets/icons/ArrowDown.svg';
import arrowUp from '@/assets/icons/ArrowUp.svg';

interface Props {
  $isOpen: boolean;
  $isPending: boolean;
}

export const ArrowUpIcon = styled(arrowUp)`
  width: 2.2rem;
  height: 2.2rem;
  path {
    fill: ${COLORS.GREEN20};
  }
`;

export const ArrowDownIcon = styled(arrowDown)`
  width: 2.2rem;
  height: 2.2rem;
  path {
    fill: ${COLORS.GREEN20};
  }
`;

export const DropdownContainer = styled.div`
  width: 16rem;
  display: flex;
  position: relative;
  z-index: 1;
`;

export const DropdownButton = styled.button<Props>`
  word-break: keep-all;
  display: flex;
  padding: 1.6rem 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.5rem;
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? ` ${COLORS.GREEN20}` : ` ${COLORS.GRAY30}`)};
  background-color: ${COLORS.WHITE10};
  pointer-events: ${({ $isPending }) => ($isPending ? 'none' : 'auto')};
  color: ${({ $isOpen }) =>
    $isOpen ? ` ${COLORS.GREEN20}` : ` ${COLORS.GRAY30}`};
`;

export const DropdownList = styled.ul`
  display: flex;
  width: 7.9rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid ${COLORS.GRAY30};
  background-color: ${COLORS.WHITE10};
  position: absolute;
  top: 6rem;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(140, 140, 140, 0.25);
`;

// DropdownItem UI 미완성
export const DropdownItem = styled.button<{ $isSelected: boolean }>`
  display: flex;
  border-radius: 0.8rem 0.8rem 0 0;
  padding: 1.8rem 4.6rem;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE10};
  & p {
    color: ${({ $isSelected }) =>
      $isSelected ? `${COLORS.GRAY80}` : `${COLORS.GRAY50}`};
  }
`;
