'use client';
import React, { useEffect, useState } from 'react';
import CardList from '../_components/cardList/CardList';
import SmallCardList from '../_components/smallCardList/SmallCardList';
import CategoryList from '../_components/categoryList/CategoryList';
import Pagenation from '@/_components/Pagenation/Pagenation';
import Banner from '../_components/banner/Banner';
import IMAGES from '@/public/images';
import { getActivityList } from '@/_api/getActivityList';
import {
  Activity,
  CategoryType,
  Data,
  HandleCategoryClick,
} from '../_components/type';

export default function Main() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [category, setCategory] = useState<CategoryType>('전체');

  const handleCategoryClick: HandleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const banner: Data[] = [
    {
      id: 1,
      images: IMAGES.activity6,
      title: '함께 배우면 즐거운 스트릿 댄스',
      price: '38,000',
      point: '4.9 (793)',
    },
  ];

  const fetchActivityList = async (category: CategoryType) => {
    const result = await getActivityList(category);
    console.log(result);
    setActivities(result.activities);
  };

  useEffect(() => {
    fetchActivityList(category);
  }, [category]);

  return (
    <>
      <Banner datas={banner} />
      <CardList data={activities} />
      <CategoryList seleted={category} onClick={handleCategoryClick} />
      <SmallCardList data={activities} />
      <Pagenation />
    </>
  );
}
