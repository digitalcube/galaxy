import React from 'react';

export const Spinner = () => {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <circle
        cx="27"
        cy="27"
        r="22"
        stroke="url(#paint0_linear)"
        strokeWidth="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="7.22987"
          y1="7.05324"
          x2="47.3365"
          y2="45.0119"
          gradientUnits="userSpaceOnUse"
        >
          {/* // TODO: Convert these hex values vars */}
          <stop stopColor="#892885" />
          <stop offset="1" stopColor="#F80A5B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
