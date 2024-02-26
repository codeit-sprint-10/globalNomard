import fetcher from '../api';

async function getActivity(activityId: string) {
  const res = await fetcher({
    url: `/activities/${activityId}`,
    method: 'GET',
  });
}
