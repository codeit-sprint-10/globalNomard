// /* eslint-disable @typescript-eslint/no-explicit-any */
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';

// interface RequestConfig {
//   url: string;
//   method: HttpMethod;
//   body?: any;
//   params?: any;
//   token?: string;
// }

// const baseURL: string = 'https://sp-globalnomad-api.vercel.app/1-10';
// const request = async ({
//   url,
//   method,
//   body,
//   params,
//   token,
// }: RequestConfig): Promise<AxiosResponse> => {
//   try {
//     const config: AxiosRequestConfig = {
//       baseURL,
//       params,
//       headers: {
//         withCredentials: true,
//       },
//     };
//     if (token && config.headers) {
//       config.headers.Authorization = token;
//     }
//     let data: AxiosResponse;
//     if (method === 'get') {
//       data = await axios.get(url, config);
//     } else if (method === 'post') {
//       data = await axios.post(url, body, config);
//     } else if (method === 'patch') {
//       data = await axios.patch(url, body, config);
//     } else if (method === 'put') {
//       data = await axios.put(url, body, config);
//     } else if (method === 'delete') {
//       data = await axios.delete(url, {
//         baseURL,
//         params,
//         headers: { Authorization: token },
//         data: body,
//       });
//     } else {
//       throw new Error(`Unsupported method: ${method}`);
//     }
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const GET = (url: string, token?: string) =>
//   request({ url, method: 'get', token });
// export const POST = (url: string, body: any, token?: string) =>
//   request({ url, method: 'post', body, token });
// export const PATCH = (url: string, body: any, token?: string) =>
//   request({ url, method: 'patch', body, token });
// export const PUT = (url: string, body: any, token?: string) =>
//   request({ url, method: 'put', body, token });
// export const DELETE = (url: string, body: any, token?: string) =>
//   request({ url, method: 'delete', body, token });

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
