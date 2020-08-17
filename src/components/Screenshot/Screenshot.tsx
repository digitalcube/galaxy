import React from 'react';

type Screenshot = {
  url: string;
  alt?: string;
};

export const createScreenshotURL = (url: string, size = 300): string => {
  const mShotsURL = `//s.wordpress.com/mshots/v1`;
  const screenshotSize = `?w=${size}`;
  return `${mShotsURL}/${url}/${screenshotSize}`;
};

export const Screenshot = ({ alt, url }: Screenshot) => (
  <>
    <img className="w-100" alt={alt} src={createScreenshotURL(url)} />
  </>
);
