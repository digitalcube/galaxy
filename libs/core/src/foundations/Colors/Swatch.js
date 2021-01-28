import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';

const Swatch = ({ variant, value }) => {
  const bg = (variant) => `bg-${variant}`;
  const hex = Color(value).hex();
  const rgb = Color(value).rgb().toString();

  return (
    <div className="space-y-1.5">
      <div className={`h-10 w-full rounded ${bg(variant)}`} />
      <div className="px-0.5 md:flex md:justify-between">
        <div>{variant}</div>
        <div className="text-right">
          <div>{hex}</div>
          <div>{rgb}</div>
        </div>
      </div>
    </div>
  );
};

Swatch.propTypes = {
  variant: PropTypes.string,
};

export default Swatch;
