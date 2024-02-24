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

// activity type
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

export type CategoryType =
  | '전체'
  | '문화 · 예술'
  | '식음료'
  | '스포츠'
  | '투어'
  | '관광'
  | '웰빙';
export type SortType = 'most_reviewed' | 'price_asc' | 'price_desc' | 'latest';

export type HandleCategoryClick = (selectedCategory: CategoryType) => void;
