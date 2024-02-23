import COLORS from '@/_styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  width: 48rem;
  margin: 0 auto 22.2rem;
`;

export const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.5rem;
  height: 5.5rem;

  border: 0.1rem solid ${COLORS.GRAY30};
  border-radius: 1.5rem;
`;

interface StyledComponentProps {
  $isClicked: boolean;
}

export const Button = styled.div<StyledComponentProps>`
  width: 5.5rem;
  height: 5.5rem;
  padding: 1.7rem 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.$isClicked ? COLORS.GREEN20 : COLORS.WHITE10};
  color: ${(props) => (props.$isClicked ? COLORS.WHITE10 : COLORS.GREEN20)};
  border: 0.1rem solid ${COLORS.GREEN20};
  border-radius: 1.5rem;
`;
