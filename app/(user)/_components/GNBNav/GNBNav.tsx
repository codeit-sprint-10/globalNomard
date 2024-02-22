'use client';
import * as React from 'react';
import * as S from './gnbNav.style';
import { useEffect, useState } from 'react';
import GNBMenuButton from '@/(user)/_components/GNBMenuButton/GNBMenuButton';
import LogoButton from '@/(user)/_components/LogoButton/LogoButton';
import ProfileButton from '@/(user)/_components/ProfileButton/ProfileButton';

interface Props {
  userType?: 'member' | undefined;
}

function GNBNav({ userType }: Props) {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('token');

      if (item) {
        setToken(item);
      }
    }
  }, [userType, token]);

  return (
    <S.Wrapper>
      <S.Container>
        <LogoButton />
        {userType === 'member' ? (
          <S.MenuWrapper>
            <ProfileButton />
            <GNBMenuButton type={userType} />
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
