'use client';

import { MyActivities, Activity } from '@/_api/review/myActivities.type';
import { PlainButton } from '@/_components/Button/PlainButton/PlainButton';
import { RESPONSIBLE_SIZE } from '@/_styles/constants';
import Text, { TextType } from '@/_styles/Text';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import fetcher from '@/_api/api';
import Image from 'next/image';
import Link from 'next/link';
import Meatball from '@/assets/icons/Meatball';
import COLORS from '@/_styles/colors';

function Page() {
  const [reviewList, setReviewList] = useState<Activity[] | undefined>();
  const [isDropMenu, setIsDropMenu] = useState(false);

  const getMyActivityRes = async () => {
    // api call

    const { data } = await fetcher<MyActivities, void>({
      url: `/my-activities`,
      method: 'GET',
    });

    setReviewList(data?.activities);
  };

  const getActivityDelete = async () => {
    const { data } = await fetcher({
      url: `/my-activities/${reviewList}`,
      method: 'DELETE',
    });
  };

  useEffect(() => {
    getMyActivityRes();
  }, []);

  return (
    <Wrapper>
      <PageHeader>
        <Text $normalType={TextType.Pre22} text="내 체험 관리" />
        <Link href="/my/register">
          <PlainButton
            style="primary"
            roundSize="S"
            width="12rem"
            height="4.8rem"
          >
            <Text $normalType={TextType.Pre10} text="체험 등록하기" />
          </PlainButton>
        </Link>
      </PageHeader>
      {reviewList?.map((review, idx) => (
        <MyActivityCard key={idx}>
          <ThumbImage
            src={review.bannerImageUrl}
            width={100}
            height={100}
            alt="대표이미지"
          />
          <Description>
            <Title>{review.title}</Title>
            <Group>
              <Price>￦{review.price} /인</Price>
              <button
                onClick={() => {
                  setIsDropMenu(isDropMenu ? false : true);
                }}
              >
                <Meatball />
                {isDropMenu && (
                  <DropMenu $isDropMenu={isDropMenu}>
                    <button>삭제하기</button>
                  </DropMenu>
                )}
              </button>
            </Group>
          </Description>
        </MyActivityCard>
      ))}
    </Wrapper>
  );
}

export default Page;

const Wrapper = styled.div`
  width: 79.2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0.8rem;

  @media screen and (max-width: ${RESPONSIBLE_SIZE.tablet}) {
    width: 42.9rem;
  }

  @media screen and (max-width: ${RESPONSIBLE_SIZE.mobile}) {
    width: 34.3rem;
  }
`;

const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MyActivityCard = styled.div`
  width: 800px;
  height: 20.4rem;
  border-radius: 40px;
  border: 1px solid ${COLORS.GRAY40};
  display: flex;
  gap: 24px;

  position: relative;
`;

const ThumbImage = styled(Image)`
  width: 204px;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 130% */
`;

const Price = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MeatballButton = styled.div``;

const DropMenu = styled.div<{ $isDropMenu: boolean }>`
  display: ${(props) => (props.$isDropMenu ? 'inline-block' : 'none')};
  position: absolute;
  background: ${COLORS.WHITE10};
  display: flex;
  width: 160px;
  padding: 18px 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--gray-30, #ddd);
`;
