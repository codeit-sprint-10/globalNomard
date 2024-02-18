import React from 'react';
import * as S from './banner.style';
import IMAGES from '@/public/images';
import Text, { TextType } from '@/_styles/Text';

export default function BannerItem() {
  return (
    <div>
      <S.Wrapper>
        <S.Background src={IMAGES.activity6} alt="banner" />
        <S.TextWrapper>
          <S.Title>
            <Text $normalType={TextType.Pre7} text="asdf" />
          </S.Title>
          <Text $normalType={TextType.Pre8} text="1월의 인기 체험 BEST 🔥" />
        </S.TextWrapper>
      </S.Wrapper>
    </div>
  );
}
