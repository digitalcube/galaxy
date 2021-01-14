import React, { FC } from 'react';
import {
  GetStarted,
  Features as FeaturesComponent,
  FeaturesProps as GalaxyFeaturesProps,
  GetStartedProps,
} from '@digitalcube/galaxy-views';

export type FeaturesProps = {
  getStarted?: GetStartedProps;
  features?: GalaxyFeaturesProps;
};

export const Features: FC<FeaturesProps> = ({ getStarted, features }) => {
  return (
    <>
      <FeaturesComponent buttonLabel={''} {...features} />
      <GetStarted {...getStarted} />
    </>
  );
};
