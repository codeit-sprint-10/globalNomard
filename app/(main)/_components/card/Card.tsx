/* eslint-disable prettier/prettier */
import React from 'react';
import * as S from './card.style';
import IMAGES from '@/public/images';
import Star from '@/assets/icons/Star.svg';
import Text, { TextType } from '@/_styles/Text';

export default function Card() {
  return (
    <S.Container>
      <S.Background src={IMAGES.activity1} alt="dummy" />
      <S.Wrapper>
        <S.Point>
          <Star />
          <Text $normalType={TextType.Pre12} text="4.9 (793)" />
        </S.Point>
        <S.Title>
          <Text
            $normalType={TextType.Pre13}
            text="함께 배우면 즐거운 스트릿 댄스"
          />
        </S.Title>
        <S.Price>
          <Text $normalType={TextType.Pre14} text="₩ 38,000원" />
          <S.Span>
            <Text $normalType={TextType.Pre15} text="/ 인" />
          </S.Span>
        </S.Price>
      </S.Wrapper>
    </S.Container>
  );
}
