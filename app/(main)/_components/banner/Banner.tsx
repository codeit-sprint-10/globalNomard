import React from 'react';
import { Data } from '../type';
import BannerItem from './BannerItem';
import * as S from './banner.style';

interface Props {
  datas: Data[];
}

export default function Banner({ datas }: Props) {
  //   const [currentIndex, setCurrentIndex] = useState<number>(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
  //     }, 5000); // 5초마다 페이지를 전환

  //     return () => clearInterval(interval);
  //   }, [datas.length]);

  const currentIndex = 0;

  return (
    <S.Container>
      {datas.map((item) => (
        <S.ListContainer key={item.id} currentIndex={currentIndex}>
          <BannerItem data={item} />
        </S.ListContainer>
      ))}
    </S.Container>
  );
}
