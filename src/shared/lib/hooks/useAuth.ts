import { useSelector, useDispatch } from 'react-redux';
import { setAuthInfo, selectAuth, UserModel } from '@/shared/redux/slices/authSlice';
import { AppDispatch } from '@/shared/redux/store';
export function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector(selectAuth);

  const updateAuthInfo = (user: UserModel | null, isSignedIn: boolean) => {
    dispatch(setAuthInfo({ user, isSignedIn }));
  };

  return { ...auth, updateAuthInfo };
}