export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/auth/profile',
  SHOP: '/shop',
  PRODUCT: (id) => `/products/${id}`,
  PRODUCT_ROUTE: '/products/:productId'
};
