import React from 'react';
import { FiSmartphone } from 'react-icons/fi';

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const Loader = ({ isLoading, children }: Props) => {
  if (isLoading) {
    return (
      <div className="mt-52 m-auto flex place-content-center ">
        <FiSmartphone className="w-20 h-40 rounded-full animate-bounce text-accent" />
      </div>
    );
  }

  return <>{children}</>;
};
