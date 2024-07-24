import React from 'react';

interface LineProps {
  width: string;
  height?: string;
}

export const Line: React.FC<LineProps> = ({ width, height = '1px' }) => {
  return (
    <span
      style={{
        height,
      }}
      className={`bg-elements inline-block ${width}`}
    ></span>
  );
};
