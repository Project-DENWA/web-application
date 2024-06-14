interface Work {
  id: string;
  name: string;
  description: string;
  cost: string;
  deadline: string;
  views: number;
  status: string;
  created_at: string;
}

interface Category {
  id: string;
  name: string;
}

interface WorkCategory {
  id: string;
  work: Work;
  category: Category;
}

interface CategoryWithWork {
  id: string;
  name: string;
  workCategories: WorkCategory[];
}

export interface CategoriesResponse {
  ok: boolean;
  result: CategoryWithWork[];
}
