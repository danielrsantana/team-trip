import { User } from './user.model';

export type Expense = {
  assignedUserId: string;
  isShared: boolean;
  categoryId: string;
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
