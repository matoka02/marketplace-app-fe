import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import classNames from 'classnames';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

import { IProduct, localCurrency } from '../types/Product';
import {
  addItemToCart,
  toggleFavorite,
  useAppDispatch,
  useAppSelector,
} from '../redux';
import { ProductProperties } from './ProductProperties';
import { Button } from './Button';

type Props = {
  product: IProduct;
  isFetching?: boolean;
};

export const Card = ({ product, isFetching }: Props) => {
  const { items } = useAppSelector((state) => state.cart);
  const { favoriteItems } = useAppSelector((state) => state.favorites);
  const [favorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isFavorite = (id: string) =>
    favoriteItems.some((item) => item._id === id);
  const isAddedToCart = items.some((item) => item.id === product._id);

  const productProps = [
    { name: 'Screen', value: product.screen! },
    { name: 'Capacity', value: product.capacity! },
    { name: 'RAM', value: product.ram! },
  ];

  const handleAddToFavorite = (currentProduct: IProduct) => {
    dispatch(toggleFavorite(currentProduct));
    setFavorite(!favorite);
  };

  const handleAddToCart = () => {
    if (items.some(({ id }) => id === product._id)) {
      toast.error(t('toTheCartError'));

      return;
    }

    const itemData = {
      id: product._id,
      name: product.name,
      price: product.priceDiscount
        ? product.priceDiscount
        : product.priceRegular,
      image: product.images[0],
      count: 1,
      category: product.category.name,
    };

    dispatch(addItemToCart(itemData));
    toast.success(t('toTheCart'));
  };

  return (
    <article
      className={classNames([
        'card box-border p-8 relative',
        'border border-secondary-light dark:border-none rounded-lg',
        'min-w-[272px]  max-h-[440px]',
        'bg-white-light',
        'dark:bg-gray-surface',
        'dark:bg-surface',
        'hover:shadow-card dark:hover:shadow-card-dark tablet:max-h-[506px]',
      ])}
    >
      <div
        className={classNames('absolute inset-0 opacity-50 -z-10', {
          'bg-secondary-light dark:bg-secondary-dark !z-10': isFetching,
        })}
      />
      <div className="grid auto-rows-auto gap-y-2 object-cover">
        <NavLink
          to={`/${product.category.name}/${product._id}`}
          className="max-h-[130px] tablet:max-h-[200px]"
        >
          <img
            className="mx-auto object-contain h-full tablet:aspect-square"
            src={product.images[0]}
            alt={product.namespaceId}
          />
        </NavLink>

        <h3 className="text-sm font-semibold mt-4 line-clamp-1 dark:text-primary-dark">
          {product.name}
        </h3>
        <div className="flex gap-2">
          <h3
            className={`text-xl font-extrabold leading-8 before:content-['${String(localCurrency)}'] dark:text-primary-dark`}
          >
            {product.priceDiscount}
          </h3>
          <h3
            className={`relative text-xl line-through font-semibold leading-8 text-secondary-light dark:text-secondary-dark before:content-['${String(localCurrency)}']`}
          >
            {product.priceRegular}
          </h3>
        </div>
        <span className="border border-secondary-light dark:border-secondary-dark border-t w-full" />

        <ProductProperties properties={productProps} />

        <div className="flex justify-between gap-x-[8px]">
          <Button onClick={handleAddToCart} outline={!!isAddedToCart}>
            {isAddedToCart ? t('addedToCart') : t('addToCart')}
          </Button>
          <button
            className={classNames([
              'w-10 h-10',
              'rounded-full border border-icons-dark',
              'hover:border-primary-light hover:scale-105',
              'dark:hover:border-primary-dark',
              'active:scale-95',
              'flex justify-center items-center shrink-0 duration-300',
            ])}
            onClick={() => handleAddToFavorite(product)}
          >
            {isFavorite(product._id) ? (
              <FaHeart className="text-secondary-accent-light dark:text-secondary-accent-dark" />
            ) : (
              <FiHeart className="dark:text-white-light" />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
