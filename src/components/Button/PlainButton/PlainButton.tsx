import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const ROUND_SIZE = {
  XL: '12px',
  L: '8px',
  M: '6px',
  S: '4px',
};

export interface BaseProps {
  style?: 'primary' | 'secondary';
  width?: String;
  height?: String;
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
    <StyledButtonBase
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
    </StyledButtonBase>
  );
}

const inactive = css`
  background-color: #9fa6b2;

  color: #ffffff;

  &:hover {
    cursor: not-allowed;
  }
`;

const primary = css`
  background-color: #0b3b2d;

  color: #ffffff;

  &:hover {
    background-color: #0b3b2d;
  }
`;

const secondary = css`
  background-color: #ffffff;
  border: 1px solid #112211;

  color: black;

  &:hover {
    background-color: #ffffff;
  }
`;

const StyledButtonBase = styled.button<{
  $style: 'primary' | 'secondary' | 'outline';
  $width: String;
  $height: String;
  $isNotActive: boolean;
  $roundSize: 'XL' | 'L' | 'M' | 'S';
}>`
  width: ${({ $width }) => `${$width}`};
  height: ${({ $height }) => `${$height}`};

  border-radius: ${({ $roundSize }) => ROUND_SIZE[`${$roundSize}`]};

  ${({ $isNotActive, $style }) => {
    if ($isNotActive) return inactive;
    if ($style === 'primary') return primary;
    if ($style === 'secondary') return secondary;
  }}
`;
