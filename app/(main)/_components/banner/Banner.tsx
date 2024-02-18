import React from 'react';
import { Data } from '../type';
import BannerItem from './BannerItem';

interface Props {
  data: Data[];
}

export default function Banner({ data }: Props) {
  console.log(data);

  return <BannerItem />;
}
