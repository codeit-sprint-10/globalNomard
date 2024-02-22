import BtnPlus from '@/assets/icons/BtnPlus';
import BtnMinus from '@/assets/icons/BtnMinus';
import * as S from './AddButton.style';
interface Props {
  style: 'plus' | 'minus';
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
}

export function AddButton({ style, type, onClick }: Props) {
  return (
    <S.StyleAddButton $type={style} type={type} onClick={onClick}>
      {style === 'plus' && <BtnPlus />}
      {style === 'minus' && <BtnMinus />}
    </S.StyleAddButton>
  );
}
