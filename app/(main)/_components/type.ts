import { StaticImageData } from 'next/image';

// activityDummyType ~
export interface Data {
  id: number;
  images: StaticImageData;
  title: string;
  price: string;
  point: string;
}

export interface Act {
  data: Data[];
}
// ~ activityDummyType

export interface Activity {
  id: number;
  images: StaticImageData;
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
}

export interface Activities {
  data: Activity[];
}
