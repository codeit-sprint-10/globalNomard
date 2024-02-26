import { RequestType, request } from './fetch';

export async function GET<T>({ ...config }: RequestType) {
  const res = await request<T>({ ...config });
  return res;
}

export async function POST<T>({ ...config }: RequestType) {
  const res = await request<T>({ ...config });
  return res;
}

export async function PUT<T>({ ...config }: RequestType) {
  const res = await request<T>({ ...config });
  return res;
}

export async function PATCH<T>({ ...config }: RequestType) {
  const res = await request<T>({ ...config });
  return res;
}

export async function DELETE<T>({ ...config }: RequestType) {
  const res = await request<T>({ ...config });
  return res;
}
