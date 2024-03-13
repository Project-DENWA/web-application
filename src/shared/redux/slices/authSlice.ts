import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
export type UserModel = {
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

interface AuthState {
  user: UserModel | null;
  isSignedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isSignedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (
      state,
      action: PayloadAction<{ user: UserModel | null; isSignedIn: boolean }>,
    ) => {
      state.user = action.payload.user;
      state.isSignedIn = action.payload.isSignedIn;
    },
  },
});

export const { setAuthInfo } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
