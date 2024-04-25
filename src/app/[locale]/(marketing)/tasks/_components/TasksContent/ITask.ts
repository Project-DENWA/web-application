interface MetaData {
  id: string;
  name: string;
  description: string;
}

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
  cost: number;
  deadline: number;
  meta: MetaData;
  createdAt: string;
  user: User;
  categories: Category[];
}
