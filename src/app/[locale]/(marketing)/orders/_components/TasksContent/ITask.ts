interface User {
  id: string;
  fullname: string;
}

interface Category {
  id: string;
  name: string;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  cost: number;
  deadline: number;
  views: number;
  status: string;
  createdAt: string;
  user: User;
  categories: Category[];
}
