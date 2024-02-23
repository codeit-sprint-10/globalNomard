import React from 'react';
import { Data } from '../type';
import BannerItem from './BannerItem';
import * as S from './banner.style';

interface Props {
  datas: Data[];
}

export default function Banner({ datas }: Props) {
  return (
    <S.Container>
      {datas.map((item) => (
        <S.ListContainer key={item.id}>
          <BannerItem data={item} />
        </S.ListContainer>
      ))}
    </S.Container>
  );
}
