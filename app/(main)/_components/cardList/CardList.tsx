import React, { useState } from 'react';
import Card from '../card/Card';
import { Activity } from '../type';
import * as S from './cardList.style';
import ArrowLeft from '@/assets/icons/Arrow_left.svg';
import ArrowRight from '@/assets/icons/Arrow_right.svg';
import Text, { TextType } from '@/_styles/Text';

export default function CardList({ data }: Activity) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleLeftButtonClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <S.Wrapper>
      <S.Title>
        <Text $normalType={TextType.Pre11} text="🔥 인기 체험" />
        <S.Arrow>
          <ArrowLeft onClick={handleLeftButtonClick} />
          <ArrowRight onClick={handleRightButtonClick} />
        </S.Arrow>
      </S.Title>
      <S.List>
        {data.map((item) => (
          <S.ListContainer key={item.id} currentIndex={currentIndex}>
            <Card data={item} />
          </S.ListContainer>
        ))}
      </S.List>
    </S.Wrapper>
  );
}
