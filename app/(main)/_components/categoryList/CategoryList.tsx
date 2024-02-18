import categoryDummy from '@/_constants/categoryDummy';
import React from 'react';
import Category from '../category/Category';
import * as S from './categoryList.style';

export default function CategoryList() {
  categoryDummy.map((item) => console.log(item));
  return (
    <S.Wrapper>
      {categoryDummy.map((item) => (
        <Category key={item.id} text={item.text} />
      ))}
    </S.Wrapper>
  );
}
