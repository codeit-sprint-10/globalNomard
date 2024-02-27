export interface Schedule {
  date: string;
  times: Time[];
}

export interface Time {
  endTime: string;
  startTime: string;
  id: number;
}
