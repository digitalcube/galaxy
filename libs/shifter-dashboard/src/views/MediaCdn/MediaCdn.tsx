import React, { FC } from 'react';
import { Control } from '@galaxy/views';

export const MediaCdn: FC<MediaCdn> = ({ title, state }: MediaCdn) => {
  return <Control label={title} state={state} />;
};

export type MediaCdn = {
  title?: string;
  state?: boolean;
};

MediaCdn.defaultProps = {
  title: 'Media CDN',
  state: false,
};
