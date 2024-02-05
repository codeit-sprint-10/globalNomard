import styled from 'styled-components';
import { RESPONSIBLE_SIZE } from '@/styles/constants';

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
}

export const Text = styled.p<Props>`
  font-size: ${(props) => props.$normalType?.size};
  font-weight: ${(props) => props.$normalType?.weight};
  line-height: ${(props) => props.$normalType?.height};
  font-family: ${(props) => props.$normalType?.font};
  @media only screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    font-family: ${(props) => props.$mobileType?.font};
    font-size: ${(props) => props.$mobileType?.size};
    font-weight: ${(props) => props.$mobileType?.weight};
    line-height: ${(props) => props.$mobileType?.height};
  }
`;

export default Text;
