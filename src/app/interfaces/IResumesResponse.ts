type Social = {
  id: string;
  website: string | null;
  github: string | null;
  telegram: string | null;
  discord: string | null;
};

type User = {
  id: string;
  fullname: string;
  bio: string | null;
  avatar: Avatar;
};

type Avatar = {
  id: string;
  icon: string | null;
  cover: string | null;
};

type Category = {
  id: string;
  name: string;
  exp: string;
};

type Language = {
  id: string;
  name: string;
  level: string;
};

type Resume = {
  id: string;
  tagname: string;
  description: string;
  verified: boolean;
  rating: number;
  createdAt: string;
  social: Social;
  user: User;
  categories: Category[];
  languages: Language[];
};

export type ResumesResponse = {
  ok: boolean;
  result: Resume[];
};
