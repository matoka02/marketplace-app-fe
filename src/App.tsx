import { Outlet } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  useLocalStorage();

  return (
    <div>
      <Header />

      <div className="min-h-[82vh] bg-hover-bg-light dark:bg-hover-bg-dark">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
