import { Rates } from './rates';
import { User } from './user';

export class Series {
  id: number;
  name: string;
  year: string;
  photo: string;
  description: string;
  rate: Rates;
  totalScore: number;
  score: number;
  user: User;
}
