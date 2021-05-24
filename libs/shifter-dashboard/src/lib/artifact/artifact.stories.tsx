import React from 'react';
import { Artifact, ArtifactProps } from './artifact';

export default {
  component: Artifact,
  title: 'Artifact',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ArtifactProps = {};

  return <Artifact />;
};
