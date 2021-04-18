/* This example requires Tailwind CSS v2.0+ */
import React, { FC, useState, Fragment, ReactNode } from 'react';
import { Transition } from '@headlessui/react';
import { Helmet } from 'react-helmet';

export const Overlay: FC<Overlay> = ({
  title,
  children,
  className,
  img,
}: Overlay) => {
  const [open, setOpen] = useState(true);

  return (
    <Transition show={open} as={Fragment}>
      <div
        className={`flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat absolute top-0 left-0 w-full z-10 ${className}`}
        style={{
          backgroundImage: img ? `url('${img}')` : '',
        }}
      >
        {children}
      </div>
    </Transition>
  );
};

export type Overlay = {
  title?: string;
  children?: ReactNode;
  className?: string;
  img?: string;
};

Overlay.defaultProps = {
  className: '',
  img: '',
};
