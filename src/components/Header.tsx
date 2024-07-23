import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHeart, FiMenu, FiShoppingBag, FiX } from 'react-icons/fi';
import classNames from 'classnames';

import BurgerMenu from '../pages/BurgerMenu';
import logo from '../assets/images/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Phones', path: 'phones' },
  { name: 'Tablets', path: 'tablets' },
  { name: 'Accessories', path: 'accessories' },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen((prev) => !prev);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(
      'uppercase text-secondary font-extrabold text-xs hover:text-primary relative active:text-primary focus:text-primary font-Mont',
      { 'text-primary pb-6 border-b-4 border-primary': isActive },
    );

  useEffect(() => {
    setMenuIsOpen(false);
  }, [pathname]);

  return (
    <header className="h-16 border-b border-elements pl-4 desktop:pl-6 flex justify-between items-center relative">
      <div className="flex justify-start gap-6">
        <NavLink to="/" className="flex">
          <img src={logo} alt="Nice gadgets" className="object-cover" />
        </NavLink>

        <nav className="hidden tablet:flex">
          <ul className="flex tablet:space-x-8 desktop:space-x-16 tablet:px-4 desktop:px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={`${link.path}`} className={getLinkClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-end">
        <div className="border-l border-elements box-border">
          <a href="/#" className="px-4 py-6 desktop:p-6 hidden tablet:flex">
            <FiHeart />
          </a>
        </div>
        <div className="border-l border-elements box-border mx-0">
          <a
            href="/#"
            className="px-4 py-6 desktop:p-6 hidden tablet:flex justify-end"
          >
            <FiShoppingBag />
          </a>
          <span className="flex p-4 tablet:hidden">
            <input
              type="checkbox"
              id="nav__toggle"
              onChange={handleOpenMenu}
              checked={menuIsOpen}
              className="hidden peer/nav z-50"
            />
            <label htmlFor="nav__toggle">
              {menuIsOpen ? <FiX /> : <FiMenu />}
            </label>
            <BurgerMenu />
          </span>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
