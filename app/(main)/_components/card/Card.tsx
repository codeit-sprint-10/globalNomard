import React from 'react';
import * as S from './card.style';
import Star from '@/assets/icons/Star.svg';
import Text, { TextType } from '@/_styles/Text';
import { Activity } from '../type';

interface Activities {
  data: Activity;
}

export default function Card({ data }: Activities) {
  const { images, title, price, rating, reviewCount } = data;
  return (
    <S.Container>
      <S.Background src={images} alt="image" />
      <S.Wrapper>
        <S.Point>
          <Star />
          <S.Rate>{rating}</S.Rate>
          <S.ReviewCount>({reviewCount})</S.ReviewCount>
        </S.Point>
        <S.Title>
          <Text $normalType={TextType.Pre13} text={title} />
        </S.Title>
        <S.Price>
          <Text $normalType={TextType.Pre14} text={`₩ ${price} 원`} />
          <S.Span>
            <Text $normalType={TextType.Pre15} text="/ 인" />
          </S.Span>
        </S.Price>
      </S.Wrapper>
    </S.Container>
  );
}
