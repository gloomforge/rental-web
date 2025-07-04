import { lazy } from 'react';

export const HomePage = lazy(() => import('../pages/Home'));
export const LoginPage = lazy(() => import('../pages/Login'));
export const RegisterPage = lazy(() => import('../pages/Register'));
export const NotFoundPage = lazy(() => import('../pages/NotFound'));
