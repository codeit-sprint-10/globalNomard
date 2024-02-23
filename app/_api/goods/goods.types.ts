export interface TopLevel {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImageUrls: SubImageURL[];
  schedules: Schedule[];
  reviewCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

export interface SubImageURL {
  id: number;
  imageUrl: string;
}
