import Image from 'next/image';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileSection = styled.div`
  width: 160px;
  height: 160px;

  border-radius: 160px;
  position: relative;
`;

export const ProfileImage = styled(Image)`
  border-radius: 160px;
`;

export const EditImageBtn = styled.button`
  width: 44px;
  height: 44px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #0b3b2d;
  border-radius: 45px;
  background: PenImg;
`;
