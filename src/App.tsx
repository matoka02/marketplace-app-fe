import { Outlet } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  useLocalStorage();

  return (
    <div>
      <Header />

      <div className="min-h-[74vh] bg-hover-bg">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;
