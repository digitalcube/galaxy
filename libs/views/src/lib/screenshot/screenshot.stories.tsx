import React from 'react';
import { Screenshot, ScreenshotProps } from './screenshot';

export default {
  component: Screenshot,
  title: 'Screenshot',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ScreenshotProps = {};

  return <Screenshot />;
};
