import { GET } from './api';

export const getActivityList = async () => {
  const { data } = await GET(`/activities?method=cursor&page=1&sie=20`);
  return data;
};
