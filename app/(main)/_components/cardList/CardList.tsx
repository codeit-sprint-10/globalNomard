import React, { useState } from 'react';
import Card from '../card/Card';
import { Activity } from '../type';
import * as S from './cardList.style';
import ArrowLeft from '@/assets/icons/Arrow_left.svg';
import ArrowRight from '@/assets/icons/Arrow_right.svg';

export default function CardList({ data }: Activity) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleLeftButtonClick = () => {
    if (currentIndex === 0) {
      console.log('first card');
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleRightButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <S.Wrapper>
      <S.Arrow>
        <ArrowLeft onClick={handleLeftButtonClick} />
        <ArrowRight onClick={handleRightButtonClick} />
      </S.Arrow>
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
