import Cookies from "universal-cookie";
export interface UserData {
  id: number;
  fio: string;
  email: string;
  username: string;
  isEmailVerified: boolean;
  bio: string | null;
  avatarUrl: string | null;
  coverImageUrl: string | null;
  websiteURL: string | null;
  twitter: string | null;
  reddit: string | null;
  notifyGifts: boolean;
  notifySales: boolean;
  notifyExpiredListingsOffers: boolean;
  notifyRecommendations: boolean;
  notifyNews: boolean;
}

const cookies = new Cookies();

export const setToken = (accessToken: string, refreshToken: string) => {
  if (!refreshToken) {
    cookies.set("accessToken", accessToken, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
  } else {
    cookies.set("accessToken", accessToken, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
    cookies.set("refreshToken", refreshToken, {
      path: "/",
      secure: true,
      sameSite: "none",
    });
  }
};

export const setUserData = (UserData: any) => {
  cookies.set("UserData", UserData, {
    path: "/",
    secure: true,
    sameSite: "none",
  });
};
export const getUserData = (): UserData | null => cookies.get("UserData");
export const getAccessToken = () => cookies.get("accessToken");
export const getRefreshToken = () => cookies.get("refreshToken");

export const removeToken = () => {
  cookies.remove("accessToken", { path: "/", secure: true, sameSite: "none" });
  cookies.remove("refreshToken", { path: "/", secure: true, sameSite: "none" });
};
export const removeUserData = () =>
  cookies.remove("UserData", { path: "/", secure: true, sameSite: "none" });
