'use client';

import Image from 'next/image';
import { styled } from 'styled-components';
import COLORS from '@/_styles/colors';
import Meatball from '@/assets/icons/Meatball';
import Text, { TextType } from '@/_styles/Text';
import GoodsDate from '@/(user)/_components/DatePick/GoodsDate/GoodsDate';
import fetcher from '@/_api/api';
import { useParams } from 'next/navigation';
import { getActivity } from '@/_api/activity/getActivity';
import { useEffect, useState } from 'react';
import { ActivityRes } from '@/_api/activity/activity.types';
import { Schedule } from '@/_api/goods/schedule.types';

function Page() {
  const { id: activityId } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<ActivityRes | undefined>();
  const [schedule, setSchedule] = useState<Schedule | undefined>();

  const getActivityRes = async () => {
    const data = await getActivity(activityId);
    setActivity(data);
  };

  const getSchedule = async () => {
    // api call
    const year = activity?.schedules[0].date.split('-')[0];
    const month = activity?.schedules[0].date.split('-')[1];
    const scheduleData = await fetcher({
      url: `/activities/${activityId}/available-schedule?year=${year}&month=${month}`,
      method: 'GET',
    });
    console.log(scheduleData.data);
    console.log(scheduleData.data[0]);
    setSchedule(scheduleData.data[0]);
  };

  useEffect(() => {
    getActivityRes();
  }, []);

  useEffect(() => {
    if (!activity) return;
    getSchedule();
  }, [activity]);

  return (
    <Wrapper>
      <Container>
        <Category>{activity?.category}</Category>
        <TitleStyle>
          {activity?.title}
          <Meatball />
        </TitleStyle>

        <Banner
          src={activity?.bannerImageUrl || ''}
          width={100}
          height={100}
          alt="배너 이미지"
        />

        <DescriptionSection>
          <Text $normalType={TextType.Pre14} text="체험 설명" />
          <Description>{activity?.description}</Description>
        </DescriptionSection>
        {activity?.schedules?.map((data) => (
          <GoodsDate
            activityId={activityId}
            scheduleId={schedule?.times?.[0].id}
            start={data.startTime}
            end={data.endTime}
          />
        ))}
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
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 43px;
`;

const Category = styled.div`
  color: ${COLORS.GRAY70};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Banner = styled(Image)`
  width: 100%;
  height: 534px;
  margin-bottom: 86px;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 0.1rem solid black;
  width: 790px;
  padding: 4rem 0;
  margin-right: 24px;
  float: left;
`;
const Description = styled.div`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  color: ${COLORS.GRAY70};
`;
