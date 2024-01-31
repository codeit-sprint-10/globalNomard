import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  color: var(--black-black_1B1B1B, #1b1b1b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

interface StyledComponentProps {
  isError: boolean;
}

export const Input = styled.input<StyledComponentProps>`
  display: flex;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  width: 35rem;

  border-radius: 6px;
  border: 1px solid ${(props) => (props.isError ? 'red' : '#79747e')};
  background: var(--white-white_FFFFFF, #fff);
`;

export const Error = styled.div`
  color: #ff472e;
`;
