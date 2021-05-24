import React, { memo, useMemo } from 'react';

/* eslint-disable-next-line */
export interface ScreenshotProps {
  url?: string;
  src?: string;
  alt?: string;
  size?: string;
  className?: string;
}

export const createScreenshotURL = (props: ScreenshotProps) => {
  const { size, url } = props;
  const mShotsURL = `//s.wordpress.com/mshots/v1`;
  const screenshotSize = `?w=${size}`;
  return `${mShotsURL}/${url}/${screenshotSize}`;
};

export const Screenshot = memo((props: ScreenshotProps) => {
  const { alt, url, className } = props;
  let { src } = props;
  const srcMemo = useMemo(() => createScreenshotURL({ url: url }), [url]);
  src = src ? src : srcMemo;
  return <img className={`${className}`} alt={alt} src={src} />;
});
