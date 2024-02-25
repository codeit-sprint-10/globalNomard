import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

export const BASE_URL = 'https://sp-globalnomad-api.vercel.app/1-10';

const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});

export const request = <T>(config: AxiosRequestConfig): AxiosPromise<T> => {
  const client = apiInstance;
  return client(config);
};

// 해당 instance, interceptors를 사용한 공용 fetcher 함수
const fetcher = async <T, D>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T, D>> => await request({ ...config });

// Request interceptor
apiInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers) return config;

    const token = localStorage.getItem('accessToken');

    // 새로운 accessToken을 헤더에 추가함.
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default fetcher;
