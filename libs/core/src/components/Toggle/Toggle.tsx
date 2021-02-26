import React from 'react';

export const Toggle: FC<Toggle> = ({ state }: Toggle) => {
  return (
    <span
      className={`border rounded-full flex items-center cursor-pointer w-12 ${
        state
          ? `border-status-success-dark bg-status-success-default justify-end`
          : `border-shifter-gray-400 bg-shifter-gray-300 justify-start`
      }`}
    >
      <span className="rounded-full border w-6 h-6 shadow-inner bg-white shadow"></span>
    </span>
  );
};

export type Toggle = {
  state?: boolean;
};

Toggle.defaultProps = {
  state: false,
};
