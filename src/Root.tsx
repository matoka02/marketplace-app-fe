import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

export const Root = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="phones" element={<Outlet />}>
            <Route index element={<CatalogPage />} />
            <Route path=":productId?" element={<ProductPage />} />
          </Route>
          <Route path="tablets" element={<Outlet />}>
            <Route index element={<CatalogPage />} />
            <Route path=":productId?" element={<ProductPage />} />
          </Route>
          <Route path="accessories" element={<Outlet />}>
            <Route index element={<CatalogPage />} />
            <Route path=":productId?" element={<ProductPage />} />
          </Route>
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
