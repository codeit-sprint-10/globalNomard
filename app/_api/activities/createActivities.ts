import { BASE_URL } from '@/_styles/constants';
import axios from 'axios';
import { Activities } from './activities.types';

/**
 *  내 체험 등록하기
 */
export const CreateActivities = async (data: Activities) => {
  try {
    const response = await axios.post(
      'https://sp-globalnomad-api.vercel.app/1-10/activities',
      data,
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error.response);
    return error.response;
  }
};

//https://sp-globalnomad-api.vercel.app/1-10/activities
