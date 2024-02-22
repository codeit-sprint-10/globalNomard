'use client';
import React from 'react';
import CardList from '../_components/cardList/CardList';
import activityDummy from '@/_constants/activityDummy';
import SmallCardList from '../_components/smallCardList/SmallCardList';
import CategoryList from '../_components/categoryList/CategoryList';
import Pagenation from '@/_components/Pagenation/Pagenation';
import Banner from '../_components/banner/Banner';
import IMAGES from '@/public/images';
import { Data } from '../_components/type';

export default function Main() {
  const banner: Data[] = [
    {
      id: 1,
      images: IMAGES.activity6,
      title: '함께 배우면 즐거운 스트릿 댄스',
      price: '38,000',
      point: '4.9 (793)',
    },
  ];
  return (
    <div>
      <Banner datas={banner} />
      <CardList data={activityDummy} />
      <CategoryList />
      <SmallCardList data={activityDummy} />
      <Pagenation />
    </div>
  );
}
