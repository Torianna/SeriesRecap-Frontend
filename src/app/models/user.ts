import { Series } from './series';

export class User {
  id: number;
  userName: string;
  password: string;
  series: Array<Series>;
}
