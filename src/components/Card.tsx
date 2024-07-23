import { useState } from 'react';
import classNames from 'classnames';
import { FiHeart } from 'react-icons/fi';

import { IProduct } from '../types/Product';
import { addItemToCart, useAppDispatch } from '../redux';
import { ProductProperties } from './ProductProperties';
import { Button } from './Button';

type Props = {
  product: IProduct;
};

const Card = ({ product }: Props) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const productProps = [
    { name: 'Screen', value: product.screen! },
    { name: 'Capacity', value: product.capacity! },
    { name: 'RAM', value: product.ram! },
  ];

  const handleAddToFavorite = () => {
    setFavorite(!favorite);
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id: product.id, count: 1 }));
  };

  return (
    <article
      className="card box-border rounded-lg p-8 min-w-[272px] border max-h-[440px] tablet:max-h-[506px]
    border-secondary bg-white"
    >
      <div className="grid auto-rows-auto gap-y-2 object-cover">
        <img
          src={product.images[0]}
          alt={product.namespaceId}
          className="mx-auto max-h-[130px] tablet:max-h-[200px]"
        />
        <h3 className="text-sm font-semibold mt-4">{product.name}</h3>
        <div className="flex gap-2">
          <h3 className="text-xl font-extrabold leading-8  before:content-['$']">
            {product.priceDiscount}
          </h3>
          <h3 className="relative text-xl line-through font-semibold leading-8 text-secondary before:content-['$']">
            {product.priceRegular}
          </h3>
        </div>

        <span className="border border-secondary border-t w-full" />
        <ProductProperties properties={productProps} />

        <div className="flex justify-between gap-x-[8px]">
          <Button onClick={handleAddToCart}>Add to cart</Button>
          <button
            className={classNames([
              'w-10 h-10',
              'rounded-full border border-icons',
              'hover:border-primary hover:scale-105',
              'active:scale-95',
              'flex justify-center items-center shrink-0 duration-300',
            ])}
            onClick={handleAddToFavorite}
          >
            <FiHeart
              className={classNames({
                'text-secondary-accent': favorite,
              })}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
