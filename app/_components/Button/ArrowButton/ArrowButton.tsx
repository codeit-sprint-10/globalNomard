import ArrowLeft from '@/assets/icons/Arrow_left.svg';
import ArrowRight from '@/assets/icons/Arrow_right.svg';
import * as S from './ArrowButton.style';

export interface Props {
  type: 'left' | 'right';
  isNotActive?: boolean;
  onClick?: () => void;
}

export function ArrowButton({ type, isNotActive = false, onClick }: Props) {
  return (
    <S.StyledArrowButton $type={type} $isNotActive={isNotActive} onClick={onClick}>
      {type === 'left' && <ArrowLeft />}
      {type === 'right' && <ArrowRight />}
    </S.StyledArrowButton>
  );
}
