import Text, { TextType } from '@/_styles/Text';
import React from 'react';
import * as S from './category.style';

interface Props {
  text: string;
}

export default function Category({ text }: Props) {
  return (
    <S.Wrapper>
      <Text $normalType={TextType.Pre16} text={text} />
    </S.Wrapper>
  );
}
