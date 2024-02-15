import activityDummy from '@/_constants/activityDummy';
import React from 'react';
import Card from '../card/Card';

export default function CardList() {
  return (
    <div>
      {activityDummy.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}
