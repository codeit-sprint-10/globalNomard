'use client';
import * as React from 'react';
import * as S from './gnbNav.style'; // Fix the casing of the file name
import { Text, TextType } from '@/_styles/Text';
import GNBMenuButton from '@/(user)/_components/GNBMenuButton/GNBMenuButton';
import Link from 'next/link';

interface Props {
  userType?: 'login' | undefined;
}

function GNBNav({ userType }: Props) {
  const [token, setToken] = useState<string>('');

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setToken('');
    window.location.href = '/';
  };

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
      <로고 />
      {userType === 'login' ? (
        <S.MenuWrapper>
          <GNBMenuButton type={userType} />
          <GNBMenuButton type="signOut" onClick={handleSignOut} />
          {/* <NotificationButton/> */}
        </S.MenuWrapper>
      ) : (
        <S.MenuWrapper>
          <GNBMenuButton type="signIn" />
          <GNBMenuButton type="signUp" />
        </S.MenuWrapper>
      )}
    </S.Wrapper>
  );
}

export default GNBNav;
