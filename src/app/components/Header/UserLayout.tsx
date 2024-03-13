"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, setAuthInfo } from '@/shared/redux/slices/authSlice';
import AuthorizedUser from './AuthorizedUser';
import UnauthorizedUser from './UnauthorizedUser';
import { getUserData } from '@/shared/lib/localstorage';
import { useAuth } from '@/shared/lib/hooks/useAuth';
const UserLayout = () => {
  const { isSignedIn, user, updateAuthInfo } = useAuth();

  useEffect(() => {
    const userData = getUserData();
    updateAuthInfo(userData, !!userData?.username);
  }, []);

  return (
    <>
      {isSignedIn ? <AuthorizedUser data={user} /> : <UnauthorizedUser />}
    </>
  );
};

export default UserLayout;
