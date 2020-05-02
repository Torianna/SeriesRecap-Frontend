import { Rates } from './rates';

export class Series {
  id: number;
  name: string;
  year: string;
  photo: string;
  description: string;
  rate: Rates;
  totalScore: number;
  score: number;
}
