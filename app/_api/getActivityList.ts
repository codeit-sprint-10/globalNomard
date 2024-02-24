import { Activity, CategoryType } from '@/(main)/_components/type';
import fetcher from './api';

interface ActivitiesRes {
  activities: Activity[];
  totalCount: number;
}

export const getActivityList = async (category: CategoryType) => {
  let url = `/activities?method=cursor&page=1&sie=20`;
  if (category && category !== '전체') {
    url += `&category=${category}`;
  }
  const { data } = await fetcher<ActivitiesRes, void>({
    url: url,
  });
  return data;
};
