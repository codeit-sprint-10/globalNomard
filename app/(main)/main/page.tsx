'use client';
import React from 'react';
import CardList from '../_components/cardList/CardList';
import activityDummy from '@/_constants/activityDummy';
import SmallCard from '../smallCard/SmallCard';
import IMAGES from '@/public/images';

export default function Main() {
  const dummy = {
    id: 1,
    images: IMAGES.activity1,
    title: '베트남 자전거 여행',
    price: '42,800',
    point: '3.9 (108)',
  };

  return (
    <div>
      <CardList data={activityDummy} />
      <SmallCard data={dummy} />
    </div>
  );
}
