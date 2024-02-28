'use client';
import * as React from 'react';
import * as S from './gnbNav.style';
// import { useEffect, useState } from 'react';
import GNBMenuButton from '@/(user)/_components/GNBMenuButton/GNBMenuButton';
import LogoButton from '@/(user)/_components/LogoButton/LogoButton';
import ProfileButton from '@/(user)/_components/ProfileButton/ProfileButton';
// import { useUserinfo } from '@/_hooks/useUserinfo';

// interface Props {
//   userType?: 'member' | undefined;
// }

const checkAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken !== null ? 'member' : 'signOut';
};

function GNBNav() {
  // const [token, setToken] = useState<string>('');

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const item = localStorage.getItem('token');

  //     if (item) {
  //       setToken(item);
  //     }
  //   }
  // }, [userType, token]);

  return (
    <S.Wrapper>
      <S.Container>
        <LogoButton />
        {checkAccessToken() === 'member' ? (
          <S.MenuWrapper>
            <ProfileButton />
            <GNBMenuButton type="member" />
          </S.MenuWrapper>
        ) : (
          <S.MenuWrapper>
            <GNBMenuButton type="signIn" />
            <GNBMenuButton type="signUp" />
          </S.MenuWrapper>
        )}
      </S.Container>
    </S.Wrapper>
  );
}

export default GNBNav;
