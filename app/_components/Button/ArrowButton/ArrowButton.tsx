import ArrowLeft from '@/assets/icons/ArrowLeft';
import ArrowRight from '@/assets/icons/ArrowRight';
import * as S from './ArrowButton.style';

export interface Props {
  type: 'left' | 'right';
  isNotActive?: boolean;
  onClick?: () => void;
}

export function ArrowButton({ type, isNotActive = false, onClick }: Props) {
  return (
    <S.StyledArrowButton
      $type={type}
      $isNotActive={isNotActive}
      onClick={onClick}
    >
      {type === 'left' && <ArrowLeft />}
      {type === 'right' && <ArrowRight />}
    </S.StyledArrowButton>
  );
}
