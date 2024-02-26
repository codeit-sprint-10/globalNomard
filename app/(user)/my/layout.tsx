'use client';

import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import styled from 'styled-components';
import SideMenu from '../_components/SideMenu/SideMenu';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Wrapper>
        <SectionLayout>
          <SideMenu />
          {children}
        </SectionLayout>
      </Wrapper>
    </>
  );
}

// const Header = styled.header`
//   height: 70px;
//   border: 1px solid black;
// `;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SectionLayout = styled.section`
  height: 100%;
  max-width: 80rem;
  display: flex;
  margin: 72px;
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    margin: 24px;
    gap: 16px;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    margin: 16px;
  }
`;
