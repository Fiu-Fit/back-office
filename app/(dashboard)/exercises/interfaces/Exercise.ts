import { Category } from '@/utils/interfaces/Category';

export interface Exercise {
  _id: string;
  name: string;
  description: string;
  category: Category;
}
