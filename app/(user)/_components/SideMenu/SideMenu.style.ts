import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 384px;
  border-radius: 12px;
  border: 1px solid #dddddd;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    width: 251px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
