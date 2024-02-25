import fetcher from '../api';


/**
 *  내 체험 등록하기
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createActivities = async (data: any) => {
  try {
    await fetcher({
      url: '/activities',
      method: 'POST',
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
