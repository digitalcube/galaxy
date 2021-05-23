import React, { memo, useMemo } from 'react';

/* eslint-disable-next-line */
export interface ScreenshotProps {
  url: string;
  alt?: string;
}

export const createScreenshotURL = (url: string, size = 300): string => {
  const mShotsURL = `//s.wordpress.com/mshots/v1`;
  const screenshotSize = `?w=${size}`;
  return `${mShotsURL}/${url}/${screenshotSize}`;
};

export function Screenshot() {
  memo((props: ScreenshotProps) => {
    const { alt, url } = props;
    const src = useMemo(() => createScreenshotURL(url), [url]);
    return <img className="w-100 rounded-l" alt={alt} src={src} />;
  });
}
