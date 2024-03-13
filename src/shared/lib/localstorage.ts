export type UserData = {
  avatarUrl: null | string;
  bio: null | string;
  coverImageUrl: null | string;
  createdAt: string;
  email: string;
  fullname: string;
  id: string;
  messages: boolean;
  news: boolean;
  username: string;
  verified: boolean;
  verifiedEmail: boolean;
};

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
