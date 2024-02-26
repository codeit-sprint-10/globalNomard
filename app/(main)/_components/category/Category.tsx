import Text, { TextType } from '@/_styles/Text';
import React from 'react';
import * as S from './category.style';
import { CategoryType, HandleCategoryClick } from '../type';

interface Props {
  selected: CategoryType;
  text: CategoryType;
  handleClick: HandleCategoryClick;
}

export default function Category({ selected, text, handleClick }: Props) {
  const isSelected = selected === text;
  return (
    <S.Wrapper $isSelected={isSelected} onClick={() => handleClick(text)}>
      <Text $normalType={TextType.Pre16} text={text} />
    </S.Wrapper>
  );
}
