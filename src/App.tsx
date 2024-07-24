import { Outlet } from 'react-router-dom';

import useInitCart from './hooks/useLocalStorage';
import useInitFavorites from './hooks/useInitFavorites';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useInitCart();
  useInitFavorites();

  return (
    <div>
      <Header />

      <div className="min-h-[75vh] p-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
