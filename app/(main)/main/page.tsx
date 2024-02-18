'use client';
import React from 'react';
import CardList from '../_components/cardList/CardList';
import activityDummy from '@/_constants/activityDummy';
import SmallCardList from '../_components/smallCardList/SmallCardList';
import CategoryList from '../_components/categoryList/CategoryList';
import Pagenation from '@/_components/Pagenation/Pagenation';
import Banner from '../_components/banner/Banner';

export default function Main() {
  return (
    <div>
      <Banner data={activityDummy} />
      <CardList data={activityDummy} />
      <CategoryList />
      <SmallCardList data={activityDummy} />
      <Pagenation />
    </div>
  );
}
