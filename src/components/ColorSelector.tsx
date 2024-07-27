/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import classNames from 'classnames';

import { useLazyGetProductByParamsQuery } from '../redux/api/productAPI';

interface ColorSelectorProps {
  color: string;
  isActive: boolean;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  color,
  isActive,
}) => {
  const { phoneId } = useParams();
  const navigate = useNavigate();
  const [trigger, { data, isLoading, isUninitialized }] =
    useLazyGetProductByParamsQuery();

  const handleChangeColor = () => {
    trigger({ id: phoneId, color });
  };

  useEffect(() => {
    if (data) {
      navigate(`/phones/${data._id}`);
    }
  }, [data]);

  return (
    <button
      onClick={handleChangeColor}
      className={classNames(
        `flex border-[2px] border-secondary-light dark:border-secondary-dark rounded-full h-8 w-8`,
        { '!border-primary-light dark:!border-primary-dark': isActive },
      )}
      style={{ backgroundColor: color }}
    ></button>
  );
};
