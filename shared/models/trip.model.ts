import { User } from './user.model';

export type Trip = {
  budget: string;
  description: string;
  endDate: string;
  id: string;
  image: string;
  localCurrency: string;
  name: string;
  startDate: string;
  teamCurrency: string;
  users: User[];
};
