'use client';
import { TopLevel } from '@/_api/goods/goods.types';
import goodsList from '@/(user)/goods/[id]/mock.json';
import Image from 'next/image';
import { styled } from 'styled-components';
import COLORS from '@/_styles/colors';
import Meatball from '@/assets/icons/Meatball';
import Text, { TextType } from '@/_styles/Text';
import GoodsDate from '@/(user)/_components/DatePick/GoodsDate/GoodsDate';

function Page({ params }: { params: { id: string } }) {
  const Activities: TopLevel = goodsList;

  // async function getActivities(userId: string) {
  //   const res = await fetch(
  //     `https://sp-globalnomad-api.vercel.app/01-10/activities/${userId}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     },
  //   );
  //   return res.json();
  //

  return (
    <Wrapper>
      <Container>
        <Category>{Activities.category}</Category>
        <TitleStyle>
          {Activities.title}
          <Meatball />
        </TitleStyle>

        <Banner
          src={Activities.bannerImageUrl}
          width={100}
          height={100}
          alt="배너 이미지"
        />

        <DescriptionSection>
          <Text $normalType={TextType.Pre14} text="체험 설명" />
          <Description>{Activities.description}</Description>
        </DescriptionSection>
        <GoodsDate
          start={Activities.schedules[0]}
          end={Activities.schedules[1]}
        />
      </Container>
    </Wrapper>
  );
}

export default Page;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div``;
const TitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 4.3rem;
`;

const Category = styled.div`
  color: ${COLORS.GRAY70};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Banner = styled(Image)`
  width: 100%;
  height: 53.4rem;
  margin-bottom: 8.6rem;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid black;
  width: 79rem;
  padding: 40px 0;
  margin-right: 2.4rem;
  float: left;
`;
const Description = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: ${COLORS.GRAY70};
`;
