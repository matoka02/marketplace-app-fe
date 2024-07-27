import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { useLazyGetProductByParamsQuery } from '../redux/api/productAPI';

interface MemoryButtonProps {
  capacity: string;
  isActive: boolean;
}

export const MemoryButton: React.FC<MemoryButtonProps> = ({
  capacity,
  isActive,
}) => {
  const { phoneId } = useParams();
  const navigate = useNavigate();
  const [trigger, { data }] = useLazyGetProductByParamsQuery();

  const handleChangeCapacity = () => {
    trigger({ id: phoneId, capacity });
  };

  useEffect(() => {
    if (data) {
      navigate(`/phones/${data?._id}`);
    }
  }, [data]);

  return (
    <button
      className={classNames(
        'border-icons-light dark:border-icons-dark border rounded-md text-primary-light dark:text-primary-dark mr-2 p-2',
        {
          'bg-primary-light dark:bg-primary-dark text-white-light dark:text-white-dark':
            isActive,
        },
      )}
      onClick={handleChangeCapacity}
    >
      {capacity}
    </button>
  );
};
