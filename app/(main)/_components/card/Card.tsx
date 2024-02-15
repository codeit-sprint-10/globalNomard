import React from 'react';
import * as S from './card.style';
import Star from '@/assets/icons/Star.svg';
import Text, { TextType } from '@/_styles/Text';
import { Data } from '../type';

interface Activity {
  data: Data;
}

export default function Card({ data }: Activity) {
  const { images, title, price, point } = data;
  return (
    <S.Container>
      <S.Background src={images} alt="image" />
      <S.Wrapper>
        <S.Point>
          <Star />
          <Text $normalType={TextType.Pre12} text={point} />
        </S.Point>
        <S.Title>
          <Text $normalType={TextType.Pre13} text={title} />
        </S.Title>
        <S.Price>
          <Text $normalType={TextType.Pre14} text={price} />
          <S.Span>
            <Text $normalType={TextType.Pre15} text="/ 인" />
          </S.Span>
        </S.Price>
      </S.Wrapper>
    </S.Container>
  );
}
