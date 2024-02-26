import { ReservationSort } from '@/_api/reservation/reservation.types';

export const SORT_OPTIONS: ReservationSort[] = [
  // { sort: 'default', text: '필터' },
  { sort: 'pending', text: '예약 신청' },
  { sort: 'canceled', text: '예약 취소' },
  { sort: 'confirmed', text: '예약 승인' },
  { sort: 'declined', text: '예약 거절' },
  { sort: 'completed', text: '체험 완료' },
];
