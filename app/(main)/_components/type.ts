import { StaticImageData } from 'next/image';

export interface Data {
  id: number;
  images: StaticImageData;
  title: string;
  price: string;
  point: string;
}

export interface Activity {
  data: Data[];
}
