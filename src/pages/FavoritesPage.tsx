import React from 'react';

import { useAppSelector } from '../redux';
import Card from '../components/Card';

const FavoritesPage: React.FC = () => {
  const favoriteItems = useAppSelector(
    (state) => state.favorites.favoriteItems,
  );

  return (
    <main className="container mx-auto flex flex-col items-center tablet:items-start px-4 pt-6 tablet:px-6 desktop:w-[1200px]">
      <header>
        <h1 className="mb-2 text-[32px] font-extrabold leading-[41px] tracking-[0.32px] tablet:mt-10 tablet:text-5xl">
          Favorites Page
        </h1>
        <p className="text-sm mb-8 tablet:mb-9 font-semibold leading-[21px] text-secondary">
          {`${favoriteItems.length} items`}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        {favoriteItems.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default FavoritesPage;
