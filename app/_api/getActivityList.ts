import { CategoryType } from '@/(main)/_components/type';
import fetcher from './api';

export const getActivityList = async (category: CategoryType) => {
  let url = `/activities?method=cursor&page=1&sie=20`;
  if (category && category !== '전체') {
    url += `&category=${category}`;
  }
  const { data } = await fetcher({
    url: url,
  });
  return data;
};
