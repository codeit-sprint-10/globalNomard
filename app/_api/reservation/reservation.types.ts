export interface ReservationData {
  cursorId: number;
  reservations: Reservation[];
  totalCount: number;
}

export interface Reservation {
  id: number;
  teamId: string;
  userId: number;
  activity: Activity;
  scheduleId: number;
  status: 'pending' | 'canceled' | 'confirmed' | 'declined' | 'completed';
  reviewSubmitted: boolean;
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  bannerImageUrl: string;
  title: string;
  id: number;
}

export interface ReservationSort {
  sort: 'pending' | 'canceled' | 'confirmed' | 'declined' | 'completed';
  text: string;
}
