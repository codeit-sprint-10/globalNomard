import styled, { css } from 'styled-components';

const ROUND_SIZE = {
  XL: '12px',
  L: '8px',
  M: '6px',
  S: '4px',
};

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

export const secondary = css`
  background-color: #ffffff;
  border: 1px solid #112211;

  color: black;

  &:hover {
    background-color: #ffffff;
  }
`;

export const StyledButtonBase = styled.button<{
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
