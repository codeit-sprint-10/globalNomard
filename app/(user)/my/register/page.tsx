'use client';

import styled from 'styled-components';
import { Text, TextType } from '@/_styles/Text';
import Button from '@/_components/Button/Button';
import { RESPONSIBLE_SIZE } from '@/_styles/constants';

function page() {
  return (
    <Wrapper>
      <PageHeader>
        <Text $normalType={TextType.Pre22} text="내 체험 등록" />
        <Button style="primary" roundSize="S" width="120px" height="48px">
          <Text $normalType={TextType.Sqo2} text="등록하기" />
        </Button>
      </PageHeader>
    </Wrapper>
  );
}

export default page;

const Wrapper = styled.div`
  width: 79.2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0.8rem;
  border: 1px solid black;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    width: 42.9rem;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    width: 34.3rem;
  }
`;

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
