import { User } from './user.model';

export type Trip = {
  assignedUserId: string;
  isShared: boolean;
  categoryId: string;
  currency: string;
  date: string;
  description: string;
  id: string;
  image: string;
  name: string;
  userId: string;
  value: string;
};
