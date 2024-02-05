import * as S from '@/styles/Text.style';

// size순으로 정렬
// export const TextType = {
//   Pre7: {
//     font: 'Pretendard',
//     size: '68rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Pre28: {
//     font: 'Pretendard',
//     size: '50rem',
//     weight: '600',
//     height: 'normal',
//   },

//   Pre11: {
//     font: 'Pretendard',
//     size: '36rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Pre22: {
//     font: 'Pretendard',
//     size: '32rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Pre13: {
//     font: 'Pretendard',
//     size: '30rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Pre19: {
//     font: 'Pretendard',
//     size: '28rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Pre37: {
//     font: 'Pretendard',
//     size: '28rem',
//     weight: '700',
//     height: '26rem',
//   },

//   Pre30: {
//     font: 'Pretendard',
//     size: '24rem',
//     weight: '700',
//     height: '26rem',
//   },

//   Pre8: {
//     font: 'Pretendard',
//     size: '24rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Pre18: {
//     font: 'Pretendard',
//     size: '24rem',
//     weight: '600',
//     height: 'normal',
//   },

//   Pre32: {
//     font: 'Pretendard',
//     size: '24rem',
//     weight: '500',
//     height: 'normal',
//   },

//   Pre9: {
//     font: 'Pretendard',
//     size: '20rem',
//     weight: '700',
//     height: '26rem',
//   },

//   Pre14: {
//     font: 'Pretendard',
//     size: '20rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Pre40: {
//     font: 'Pretendard',
//     size: '20rem',
//     weight: '600',
//     height: 'normal',
//   },

//   Pre38: {
//     font: 'Pretendard',
//     size: '20rem',
//     weight: '600',
//     height: '26rem',
//   },

//   Pre20: {
//     font: 'Pretendard',
//     size: '20rem',
//     weight: '400',
//     height: 'normal',
//   },

//   Pre39: {
//     font: 'Pretendard',
//     size: '20rem',
//     weight: '400',
//     height: '26rem',
//   },

//   Pre25: {
//     font: 'Pretendard',
//     size: '18rem',
//     weight: '700',
//     height: '26rem',
//   },

//   Pre5: {
//     font: 'Pretendard',
//     size: '18rem',
//     weight: '500',
//     height: 'normal',
//   },

//   Pre17: {
//     font: 'Pretendard',
//     size: '18rem',
//     weight: '500',
//     height: '22rem',
//   },

//   Pre16: {
//     font: 'Pretendard',
//     size: '18rem',
//     weight: '400',
//     height: 'normal',
//   },

//   Pre29: {
//     font: 'Pretendard',
//     size: '18rem',
//     weight: '400',
//     height: '24rem',
//   },

//   Pre36: {
//     font: 'Pretendard',
//     size: '18rem',
//     weight: '400',
//     height: '16rem',
//   },

//   Pre10: {
//     font: 'Pretendard',
//     size: '16rem',
//     weight: '700',
//     height: '26rem',
//   },

//   Pre41: {
//     font: 'Pretendard',
//     size: '16rem',
//     weight: '600',
//     height: 'normal',
//   },

//   Pre6: {
//     font: 'Pretendard',
//     size: '16rem',
//     weight: '500',
//     height: 'normal',
//   },

//   Pre26: {
//     font: 'Pretendard',
//     size: '16rem',
//     weight: '500',
//     height: '26rem',
//   },

//   Pre1: {
//     font: 'Pretendard',
//     size: '16rem',
//     weight: '400',
//     height: '26rem',
//   },

//   Pre3: {
//     font: 'Pretendard',
//     size: '16rem',
//     weight: '400',
//     height: 'normal',
//   },

//   Pre12: {
//     font: 'Pretendard',
//     size: '14rem',

//     weight: '600',
//     height: 'normal',
//   },

//   Pre21: {
//     font: 'Pretendard',
//     size: '14rem',
//     weight: '500',
//     height: 'normal',
//   },

//   Pre15: {
//     font: 'Pretendard',
//     size: '14rem',
//     weight: '400',
//     height: 'normal',
//   },

//   Pre4: {
//     font: 'Pretendard',
//     size: '12rem',
//     weight: '400',
//     height: '16rem',
//   },

//   Pre35: {
//     font: 'Pretendard',
//     size: '24rem',
//     weight: '400',
//     height: '26rem',
//   },

//   Ari31: {
//     font: 'Arial',
//     size: '16rem',
//     weight: '400',
//     height: 'normal',
//   },

//   Open23: {
//     font: 'Open Sans',
//     size: '14rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Open24: {
//     font: 'Open Sans',
//     size: '13rem',
//     weight: '600',
//     height: 'normal',
//   },

//   Sqo42: {
//     font: 'Spoqa Han Sans Neo',
//     size: '20rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Sqo2: {
//     font: 'Spoqa Han Sans Neo',
//     size: '16rem',
//     weight: '700',
//     height: '20rem',
//   },

//   Sqo33: {
//     font: 'Spoqa Han Sans Neo',
//     size: '16rem',
//     weight: '400',
//     height: '26rem',
//   },

//   Sqo34: {
//     font: 'Spoqa Han Sans Neo',
//     size: '14rem',
//     weight: '700',
//     height: 'normal',
//   },

//   Sqo43: {
//     font: 'Spoqa Han Sans Neo',
//     size: '14rem',
//     weight: '400',
//     height: '22rem',
//   },

//   Sqo44: {
//     font: 'Spoqa Han Sans Neo',
//     size: '12rem',
//     weight: '400',
//     height: '16rem',
//   },

//   Hel27: {
//     font: 'Helvetica Neue',
//     size: '14rem',
//     weight: '400',
//     height: '24rem',
//   },
// };

export const TextType = {
  // Pre 객체들
  Pre1: {
    font: 'Pretendard',
    size: '1.6rem',
    weight: '400',
    height: '2.6rem',
  },

  Pre3: {
    font: 'Pretendard',
    size: '1.6rem',
    weight: '400',
    height: 'normal',
  },

  Pre4: {
    font: 'Pretendard',
    size: '1.2rem',
    weight: '400',
    height: '1.6rem',
  },

  Pre5: {
    font: 'Pretendard',
    size: '1.8rem',
    weight: '500',
    height: 'normal',
  },

  Pre6: {
    font: 'Pretendard',
    size: '1.6rem',
    weight: '500',
    height: 'normal',
  },

  Pre7: {
    font: 'Pretendard',
    size: '6.8rem',
    weight: '700',
    height: 'normal',
  },

  Pre8: {
    font: 'Pretendard',
    size: '2.4rem',
    weight: '700',
    height: 'normal',
  },

  Pre9: {
    font: 'Pretendard',
    size: '2rem',
    weight: '700',
    height: '2.6rem',
  },

  Pre10: {
    font: 'Pretendard',
    size: '1.6rem',
    weight: '700',
    height: '2.6rem',
  },

  Pre11: {
    font: 'Pretendard',
    size: '3.6rem',
    weight: '700',
    height: 'normal',
  },

  Pre12: {
    font: 'Pretendard',
    size: '1.4rem',
    weight: '600',
    height: 'normal',
  },

  Pre13: {
    font: 'Pretendard',
    size: '3rem',
    weight: '700',
    height: 'normal',
  },

  Pre14: {
    font: 'Pretendard',
    size: '2rem',
    weight: '700',
    height: 'normal',
  },

  Pre15: {
    font: 'Pretendard',
    size: '1.4rem',
    weight: '400',
    height: 'normal',
  },

  Pre16: {
    font: 'Pretendard',
    size: '1.8rem',
    weight: '400',
    height: 'normal',
  },

  Pre17: {
    font: 'Pretendard',
    size: '1.8rem',
    weight: '500',
    height: '2.2rem',
  },

  Pre18: {
    font: 'Pretendard',
    size: '2.4rem',
    weight: '600',
    height: 'normal',
  },

  Pre19: {
    font: 'Pretendard',
    size: '2.8rem',
    weight: '700',
    height: 'normal',
  },

  Pre20: {
    font: 'Pretendard',
    size: '2rem',
    weight: '400',
    height: 'normal',
  },
  Pre21: {
    font: 'Pretendard',
    size: '1.4rem',
    weight: '500',
    height: 'normal',
  },

  Pre22: {
    font: 'Pretendard',
    size: '3.2rem',
    weight: '700',
    height: 'normal',
  },

  Pre25: {
    font: 'Pretendard',
    size: '1.8rem',
    weight: '700',
    height: '2.6rem',
  },

  Pre26: {
    font: 'Pretendard',
    size: '1.6rem',
    weight: '500',
    height: '2.6rem',
  },

  Pre28: {
    font: 'Pretendard',
    size: '5rem',
    weight: '600',
    height: 'normal',
  },

  Pre29: {
    font: 'Pretendard',
    size: '1.8rem',
    weight: '400',
    height: '2.4rem',
  },

  Pre30: {
    font: 'Pretendard',
    size: '2.4rem',
    weight: '700',
    height: '2.6rem',
  },

  Pre32: {
    font: 'Pretendard',
    size: '2.4rem',
    weight: '500',
    height: 'normal',
  },

  Pre35: {
    font: 'Pretendard',
    size: '2.4rem',
    weight: '400',
    height: '2.6rem',
  },

  Pre36: {
    font: 'Pretendard',
    size: '1.8rem',
    weight: '400',
    height: '1.6rem',
  },

  Pre37: {
    font: 'Pretendard',
    size: '2.8rem',
    weight: '700',
    height: '2.6rem',
  },

  Pre38: {
    font: 'Pretendard',
    size: '2rem',
    weight: '600',
    height: '2.6rem',
  },

  Pre39: {
    font: 'Pretendard',
    size: '2rem',
    weight: '400',
    height: '2.6rem',
  },

  Pre40: {
    font: 'Pretendard',
    size: '2rem',
    weight: '600',
    height: 'normal',
  },

  Pre41: {
    font: 'Pretendard',
    size: '1.6rem',
    weight: '600',
    height: 'normal',
  },

  // Arial 객체
  Ari31: {
    font: 'Arial',
    size: '1.6rem',
    weight: '400',
    height: 'normal',
  },

  // Helvetica Neue 객체
  Hel27: {
    font: 'Helvetica Neue',
    size: '1.4rem',
    weight: '400',
    height: '2.4rem',
  },

  // Open Sans 객체
  Open23: {
    font: 'Open Sans',
    size: '1.4rem',
    weight: '700',
    height: 'normal',
  },

  Open24: {
    font: 'Open Sans',
    size: '1.3rem',
    weight: '600',
    height: 'normal',
  },

  // Spoqa Han Sans Neo 객체
  Sqo2: {
    font: 'Spoqa Han Sans Neo',
    size: '1.6rem',
    weight: '700',
    height: '2rem',
  },

  Sqo33: {
    font: 'Spoqa Han Sans Neo',
    size: '1.6rem',
    weight: '400',
    height: '2.6rem',
  },

  Sqo34: {
    font: 'Spoqa Han Sans Neo',
    size: '1.4rem',
    weight: '700',
    height: 'normal',
  },

  Sqo42: {
    font: 'Spoqa Han Sans Neo',
    size: '2rem',
    weight: '700',
    height: 'normal',
  },

  Sqo43: {
    font: 'Spoqa Han Sans Neo',
    size: '1.4rem',
    weight: '400',
    height: '2.2rem',
  },

  Sqo44: {
    font: 'Spoqa Han Sans Neo',
    size: '1.2rem',
    weight: '400',
    height: '1.6rem',
  },
};

interface Props {
  $normalType?: {
    font?: string;
    size?: string;
    weight?: string;
    height?: string;
  };
  $mobileType?: {
    font?: string;
    size?: string;
    weight?: string;
    height?: string;
  };
  text?: string;
}

export const Text = ({ $normalType, $mobileType, text }: Props) => {
  return (
    <S.Text $normalType={$normalType} $mobileType={$mobileType}>
      {text}
    </S.Text>
  );
};

export default Text;
