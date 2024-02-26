import COLORS from '@/_styles/colors';
import styled from 'styled-components';

interface StyledProps {
  $isSelected: boolean;
}

export const Wrapper = styled.div<StyledProps>`
  width: 14rem;
  padding: 1.6rem 3rem;
  text-align: center;

  color: ${(props) => (props.$isSelected ? COLORS.WHITE10 : COLORS.GREEN20)};
  background-color: ${(props) =>
    props.$isSelected ? COLORS.GREEN20 : COLORS.WHITE10};

  border: 0.1rem solid ${COLORS.GREEN20};
  border-radius: 1.5rem;
`;
