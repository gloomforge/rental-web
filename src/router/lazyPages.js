import { lazy } from 'react';

export const HomePage = lazy(() => import('../pages/Home'));
export const LoginPage = lazy(() => import('../pages/Login'));
export const RegisterPage = lazy(() => import('../pages/Register'));
export const ShopPage = lazy(() => import('../pages/Shop'));