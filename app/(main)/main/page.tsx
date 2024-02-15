'use client';
import React from 'react';
import CardList from '../_components/cardList/CardList';
import activityDummy from '@/_constants/activityDummy';
import SmallCardList from '../_components/smallCardList/SmallCardList';

export default function Main() {
  return (
    <div>
      <CardList data={activityDummy} />
      <SmallCardList data={activityDummy} />
    </div>
  );
}
