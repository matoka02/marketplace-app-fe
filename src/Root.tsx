import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import NotFound from './pages/NotFound';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import FavoritesPage from './pages/FavoritesPage';
import ScrollToTop from './components/ScrollToTop';

export const Root = () => {
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="phones" element={<CatalogPage />}>
          <Route path="/:phoneId?" element={<ProductPage />} />
        </Route>
        <Route path="tablets">
          <Route path="/:tabletId?" element={<h1>Tablets Page</h1>} />
        </Route>
        <Route path="accessories">
          <Route path="/:accessoryId?" element={<h1>Accessories Page</h1>} />
        </Route>
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>;
};
