import Cookies from "universal-cookie";
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

export const setUserData = (UserData: UserData) => {
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
