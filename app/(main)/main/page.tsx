'use client';
import React, { useEffect, useState } from 'react';
import CardList from '../_components/cardList/CardList';
import SmallCardList from '../_components/smallCardList/SmallCardList';
import CategoryList from '../_components/categoryList/CategoryList';
import Pagenation from '@/_components/Pagenation/Pagenation';
import Banner from '../_components/banner/Banner';
import IMAGES from '@/public/images';
import { Data } from '../_components/type';
import { getActivityList } from '@/_api/getActivityList';

export default function Main() {
  const [activities, setActivities] = useState([]);
  const banner: Data[] = [
    {
      id: 1,
      images: IMAGES.activity6,
      title: '함께 배우면 즐거운 스트릿 댄스',
      price: '38,000',
      point: '4.9 (793)',
    },
  ];

  const fetchActivityList = async () => {
    const result = await getActivityList();
    console.log(result.activities);
    setActivities(result.activities);
  };

  useEffect(() => {
    fetchActivityList();
  });

  return (
    <>
      <Banner datas={banner} />
      <CardList data={activities} />
      <CategoryList />
      <SmallCardList data={activities} />
      <Pagenation />
    </>
  );
}
