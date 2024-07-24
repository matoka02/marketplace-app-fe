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
      onClick={handleChangeCapacity}
      className={classNames(
        'border-icons border rounded-md text-primary mr-2 p-2',
        {
          'bg-primary text-white': isActive,
        },
      )}
    >
      {capacity}
    </button>
  );
};
