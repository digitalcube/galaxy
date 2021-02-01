import React, { FC, ReactNode } from 'react';

type Swatch = {
  children?: ReactNode;
  className: string;
  tokenClassName: string;
  value: string;
};

export const Swatch: FC<Swatch> = ({
  className,
  tokenClassName,
  value,
  children,
}) => {
  return (
    <div>
      <div>{tokenClassName}</div>
      <div>{value}</div>
      <div className={`${tokenClassName} ${className}`}>
        {children ? children : null}
      </div>
    </div>
  );
};
