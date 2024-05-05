interface User {
  id: string;
  fullname: string;
  bio: string | null;
}

interface Category {
  id: string;
  name: string;
}

export interface OrderResult {
  id: string;
  name: string;
  description: string;
  cost: string;
  deadline: Date;
  views: number;
  status: string;
  createdAt: string;
  user: User;
  categories: Category[];
  images: string[];
  feedbacksAmount: number;
}

export interface Order {
  ok: boolean;
  result: OrderResult;
}
