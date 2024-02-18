'use client';
import React from 'react';
import CardList from '../_components/cardList/CardList';
import activityDummy from '@/_constants/activityDummy';
import SmallCardList from '../_components/smallCardList/SmallCardList';
import CategoryList from '../_components/categoryList/CategoryList';

export default function Main() {
  return (
    <div>
      <CardList data={activityDummy} />
      <CategoryList />
      <SmallCardList data={activityDummy} />
    </div>
  );
}
