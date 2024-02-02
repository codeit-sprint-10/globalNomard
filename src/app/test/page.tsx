'use client';

import Button from '@/components/Button/Button';
import { styled } from 'styled-components';

function page() {
  return (
    <StyledContainer>
      <div>테스트 페이지</div>
      <Button.Plain style="primary" roundSize="S" width={'100%'}>
        <ButtonStyle>로그인 하기</ButtonStyle>
      </Button.Plain>

      <Button.Plain style="secondary" roundSize="M" width={'100%'}>
        <ButtonStyle>로그인 하기</ButtonStyle>
      </Button.Plain>

      <Button.Plain roundSize="M" isNotActive={true} width={'100%'}>
        <ButtonStyle>신청불가</ButtonStyle>
      </Button.Plain>

      <Button.Plain style="primary" roundSize="S" width={'136px'} height={'56px'}>
        <TextStyle>검색하기</TextStyle>
      </Button.Plain>

      <Button.Plain style="secondary" roundSize="XL">
        <TextLayout>문화예술</TextLayout>
      </Button.Plain>
    </StyledContainer>
  );
}

export default page;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  padding: 20px;
  gap: 30px;
`;

const ButtonStyle = styled.div`
  font-size: 24px;
  margin: 20px;
`;

const TextStyle = styled.div`
  font-size: 16px;
`;

const TextLayout = styled.div`
  font-size: 18px;
  margin: 16px 30px;
`;
