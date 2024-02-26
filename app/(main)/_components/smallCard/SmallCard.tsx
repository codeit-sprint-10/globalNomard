import React from 'react';
import * as S from './smallCard.style';
import { Activity } from '../type';
import Text, { TextType } from '@/_styles/Text';
import Link from 'next/link';

interface Activities {
  data: Activity;
}

export default function SmallCard({ data }: Activities) {
  const { id, bannerImageUrl, title, price, rating, reviewCount } = data;

  return (
    <Link href={`/goods/${id}`}>
      <S.Wrapper>
        <S.Card
          width={283}
          height={283}
          src={bannerImageUrl || ''}
          alt="images"
        />
        <S.Info>
          <S.RatingWrapper>
            <S.Rate>⭐️ {rating}</S.Rate>
            <S.ReviewCount>({reviewCount})</S.ReviewCount>
          </S.RatingWrapper>
          <Text $normalType={TextType.Pre18} text={title} />
          <S.Price>
            <Text $normalType={TextType.Pre19} text={`₩ ${price} 원`} />
            <Text $normalType={TextType.Pre20} text="/ 인" />
          </S.Price>
        </S.Info>
      </S.Wrapper>
    </Link>
  );
}
