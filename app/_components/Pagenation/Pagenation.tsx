import React from 'react';
import * as S from './pagenation.style';
import Text, { TextType } from '@/_styles/Text';
import BoldArrowLeft from '@/assets/icons/bold_arrowleft.svg';
import BoldArrowRight from '@/assets/icons/bold_arrow-right.svg';

export default function Pagenation() {
  return (
    <S.Wrapper>
      <S.ArrowButton>
        <BoldArrowLeft />
      </S.ArrowButton>
      <S.Button $isClicked={true}>
        <Text $normalType={TextType.Pre16} text="1" />
      </S.Button>
      <S.Button $isClicked={false}>
        <Text $normalType={TextType.Pre16} text="2" />
      </S.Button>
      <S.Button $isClicked={false}>
        <Text $normalType={TextType.Pre16} text="3" />
      </S.Button>
      <S.Button $isClicked={false}>
        <Text $normalType={TextType.Pre16} text="4" />
      </S.Button>
      <S.Button $isClicked={false}>
        <Text $normalType={TextType.Pre16} text="5" />
      </S.Button>
      <S.ArrowButton>
        <BoldArrowRight />
      </S.ArrowButton>
    </S.Wrapper>
  );
}
