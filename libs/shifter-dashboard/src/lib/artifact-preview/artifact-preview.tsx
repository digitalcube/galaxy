import React from 'react';
import { Screenshot, ScreenshotProps } from '@galaxy/views';

export function ArtifactPreview(props: ScreenshotProps) {
  const { src, size } = props;
  return <Screenshot size={size} className="w-20 rounded" src={src} />;
}

export default ArtifactPreview;
