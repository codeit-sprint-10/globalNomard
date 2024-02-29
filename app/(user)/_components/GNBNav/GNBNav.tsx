'use client';
import React, { useEffect, useState } from 'react';
import * as S from './gnbNav.style';
import GNBMenuButton from '@/(user)/_components/GNBMenuButton/GNBMenuButton';
import LogoButton from '@/(user)/_components/LogoButton/LogoButton';
import ProfileButton from '@/(user)/_components/ProfileButton/ProfileButton';

function GNBNav() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      setIsUser(!!accessToken);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <LogoButton />
        {isUser ? (
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
