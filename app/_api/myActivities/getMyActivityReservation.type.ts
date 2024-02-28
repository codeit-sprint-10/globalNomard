export interface ActivityRes {
  date: string;
  reservations: Reservations;
}

export interface Reservations {
  completed: number;
  confirmed: number;
  pending: number;
}
