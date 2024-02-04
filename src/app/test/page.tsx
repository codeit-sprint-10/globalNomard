'use client';

import Button from '@/components/Button/Button';
import SideMenu from '@/components/SideMenu/SideMenu';
import { styled } from 'styled-components';

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
