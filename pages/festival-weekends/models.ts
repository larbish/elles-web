export interface FestivalDay {
  id: number;
  title: string;
  dateAndHour: string;
  cover: string;
  artists: string;
  color: string;
}

export interface FestivalWeekend {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  access: string;
  pricing: string;
  program: string;
  cover: string;
  festivalDays: FestivalDay[];
}
