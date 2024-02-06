'use client';

import { styled } from 'styled-components';
import SideMenu from '../_components/SideMenu/SideMenu';

function page() {
  return (
    <StyledContainer>
      <SideMenu />
    </StyledContainer>
  );
}

export default page;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  padding: 20px;
  gap: 30px;
`;
