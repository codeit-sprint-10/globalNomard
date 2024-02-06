import { ReactNode } from 'react';
import * as S from './PlainButton.style';

export interface BaseProps {
  style?: 'primary' | 'secondary';
  width?: string;
  height?: string;
  roundSize: 'XL' | 'L' | 'M' | 'S';
  isNotActive?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
}

export function PlainButton({
  style = 'secondary',
  roundSize = 'S',
  isNotActive = false,
  children,
  onClick,
  width = '',
  height = '100%',
  type,
}: BaseProps) {
  return (
    <S.StyledButtonBase
      $style={style}
      $width={width}
      $height={height}
      $isNotActive={isNotActive}
      $roundSize={roundSize}
      onClick={onClick}
      type={type}
      disabled={isNotActive}
    >
      {children}
    </S.StyledButtonBase>
  );
}
