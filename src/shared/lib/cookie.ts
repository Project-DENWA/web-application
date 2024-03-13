import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setToken = (accessToken: string, refreshToken: string) => {
  if (!refreshToken) {
    cookies.set('accessToken', accessToken, {
      path: '/',
      secure: true,
      sameSite: 'none',
    });
  } else {
    cookies.set('accessToken', accessToken, {
      path: '/',
      secure: true,
      sameSite: 'none',
    });
    cookies.set('refreshToken', refreshToken, {
      path: '/',
      secure: true,
      sameSite: 'none',
      httpOnly: true,
    });
  }
};

export const getAccessToken = () => cookies.get('accessToken');

export const getRefreshToken = () => cookies.get('refreshToken');

export const removeToken = () => {
  cookies.remove('accessToken', { path: '/', secure: true, sameSite: 'none' });
  cookies.remove('refreshToken', {
    path: '/',
    secure: true,
    sameSite: 'none',
    httpOnly: true,
  });
};
export const removeUserData = () =>
  cookies.remove('UserData', { path: '/', secure: true, sameSite: 'none' });
