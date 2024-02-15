import React from 'react';
import * as S from './smallCard.style';
import IMAGES from '@/public/images';
import { Data } from '../_components/type';
import Text, { TextType } from '@/_styles/Text';

interface Activity {
  data: Data;
}

export default function SmallCard({ data }: Activity) {
  const { images, title, price, point } = data;
  console.log(images);

  return (
    <S.Wrapper>
      <S.Card src={IMAGES.activity1} alt="images" />
      <S.Info>
        <Text $normalType={TextType.Pre6} text={`⭐️ ${point}`} />
        <Text $normalType={TextType.Pre18} text={title} />
        <S.Price>
          <Text $normalType={TextType.Pre19} text={`₩ ${price} 원`} />
          <Text $normalType={TextType.Pre20} text="/ 인" />
        </S.Price>
      </S.Info>
    </S.Wrapper>
  );
}
