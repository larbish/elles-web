import { FestivalDay } from './days';

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
