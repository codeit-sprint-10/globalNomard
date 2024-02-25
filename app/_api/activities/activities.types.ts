// Generated by https://quicktype.io

export interface Activities {
  id?: number;
  userId?: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating?: number;
  reviewCount?: number;
  createdAt?: string;
  updatedAt?: string;
  subImages?: SubImage[];
  schedules: Schedule[];
}

export interface Schedule {
  startTime: string;
  endTime: string;
  date: string;
}

export interface Time {
  endTime: string;
  startTime: string;
  id?: number;
}

export interface SubImage {
  imageUrl: string;
  id: number;
}
