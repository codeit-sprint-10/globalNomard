import categoryDummy from '@/_constants/categoryDummy';
import React from 'react';
import Category from '../category/Category';
import * as S from './categoryList.style';
import { CategoryType, HandleCategoryClick } from '../type';

interface Props {
  seleted: CategoryType;
  onClick: HandleCategoryClick;
}

export default function CategoryList({ seleted, onClick }: Props) {
  return (
    <S.Wrapper>
      {categoryDummy.map((item) => (
        <Category
          key={item.id}
          selected={seleted}
          text={item.text}
          handleClick={onClick}
        />
      ))}
    </S.Wrapper>
  );
}
