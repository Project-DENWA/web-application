interface User {
  id: string;
  fullname: string;
  bio: string | null;
}

interface Category {
  id: string;
  name: string;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  cost: string;
  deadline: number;
  views: number;
  status: string;
  createdAt: string;
  user: User;
  images: string[]; 
  feedbacksAmount: number;
  categories: Category[];
}

