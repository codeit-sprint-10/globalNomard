import React from 'react';
import * as S from './smallCardList.style';
import { Activities } from '../type';
import SmallCard from '../smallCard/SmallCard';
import Text, { TextType } from '@/_styles/Text';

export default function SmallCardList({ data }: Activities) {
  return (
    <S.Wrapper>
      <Text $normalType={TextType.Pre11} text="🛼 모든 체험" />
      <S.List>
        {data.map((item) => (
          <div key={item.id}>
            <SmallCard data={item} />
          </div>
        ))}
      </S.List>
    </S.Wrapper>
  );
}
