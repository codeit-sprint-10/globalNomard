'use client';

import { ReactNode } from 'react';
import * as S from '@/(auth)/sign.style';
import logo from '@/public/images/logo.png';

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <S.ThumbWrapper>
        <S.ThumbImage src={logo} alt="logo" width={100} height={100} />
      </S.ThumbWrapper>
      {children}
    </div>
  );
}
