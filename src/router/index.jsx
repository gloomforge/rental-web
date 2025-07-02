import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { ROUTES } from '../config';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ShopPage,
} from './lazyPages';
import { ProductPage } from '../pages/Products';
import { GuestRoute } from '../features/auth';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route
            path={ROUTES.LOGIN}
            element={
              <GuestRoute>
                <LoginPage />
              </GuestRoute>
            }
          />
          <Route
            path={ROUTES.REGISTER}
            element={
              <GuestRoute>
                <RegisterPage />
              </GuestRoute>
            }
          />
          <Route path={ROUTES.SHOP} element={<ShopPage />} />
          <Route path={ROUTES.PRODUCT_ROUTE} element={<ProductPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
