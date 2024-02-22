import React from 'react';
import * as S from './banner.style';
import Text, { TextType } from '@/_styles/Text';
import { Data } from '../type';

interface Props {
  data: Data;
}

export default function BannerItem({ data }: Props) {
  return (
    <S.Wrapper>
      <S.Background src={data.images} alt="banner" />
      <S.TextWrapper>
        <S.Title>
          <Text $normalType={TextType.Pre7} text={data.title} />
        </S.Title>
        <Text $normalType={TextType.Pre8} text="1월의 인기 체험 BEST 🔥" />
      </S.TextWrapper>
    </S.Wrapper>
  );
}
