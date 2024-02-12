import BtnPlus from '@/assets/icons/BtnMinus';
import BtnMinus from '@/assets/icons/BtnMinus';
import * as S from './AddButton.style';
interface Props {
  type: 'plus' | 'minus';
  onClick?: () => void;
}

export function AddButton({ type, onClick }: Props) {
  return (
    <S.StyleAddButton $type={type} onClick={onClick}>
      {type === 'plus' && <BtnPlus />}
      {type === 'minus' && <BtnMinus />}
    </S.StyleAddButton>
  );
}
