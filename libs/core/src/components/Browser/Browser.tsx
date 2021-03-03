import React, { ReactNode } from 'react';
import { Image } from '@galaxy/core';

export const Browser = ({ className, img }: Browser) => (
  <div className={`bg-purple-dark rounded overflow-hidden ${className}`}>
    <svg
      className="bg-shifter-gray-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 380 16"
    >
      <g mask="url(#a)">
        <circle cx="14" cy="8" r="3" className="bg-shifter-gray-500" />
      </g>
      <g mask="url(#a)">
        <circle cx="30" cy="8" r="3" className="bg-shifter-gray-500" />
      </g>
      <g mask="url(#a)">
        <circle cx="46" cy="8" r="3" className="bg-shifter-gray-500" />
      </g>
    </svg>
    <Image img={img} className="w-full" />
  </div>
);

export type Browser = {
  className?: string;
  img?: string;
};
