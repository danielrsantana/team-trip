import { User } from './user.model';

export type Credit = {
  assignedUserId: string;
  currency: string;
  date: string;
  description: string;
  id: string;
  image: string;
  name: string;
  tripId: string;
  userId: string;
  value: string;
};
