export interface UserData  {
  avatarUrl: string;
  bio: null | string;
  coverImageUrl: null | string;
  createdAt: string;
  email: string;
  meta: Meta;
  messages: boolean;
  news: boolean;
  username: string;
  verified: boolean;
  verifiedEmail: boolean;
};

// export interface Avatar {
//   id: string;
//   icon: string;
//   cover: string;
// }

export interface Meta {
  id: string;
  description: string | null;
}

export const setUserData = (userData: UserData) => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = (): UserData | null => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

export const removeUserData = () => {
  localStorage.removeItem('userData');
};
