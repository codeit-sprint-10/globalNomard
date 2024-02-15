'use client';
import React from 'react';
import CardList from '../_components/cardList/CardList';
import activityDummy from '@/_constants/activityDummy';

export default function Main() {
  return (
    <div>
      <CardList data={activityDummy} />
    </div>
  );
}
