'use client';

import { styled } from 'styled-components';

function page() {
  return (
    <StyledContainer>
      <div>테스트 페이지</div>
    </StyledContainer>
  );
}

export default page;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  border: 1px solid black;
  padding: 20px;
  gap: 30px;
`;
