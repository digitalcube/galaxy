import React, { FC } from 'react';
import {
  Heading,
  Section,
  css,
} from '@galaxy/core';
import { Artifacts } from '../../views/Artifacts/Artifacts';
import { deploysTheme } from './Deploys.galaxy';
import { WpControls } from '../WpControls';
import { AutoPublish } from '../AutoPublish';
import { ArtifactProps } from '../Artifact';
const { deploys } = deploysTheme;

export const Deploys: FC<Deploys> = ({ variants, state, title, artifacts }) => {
  const deploysCss = css({ variants: variants });

  console.log(deploysCss);

  return (
    <Section className={`${deploysCss}`}>
      <WpControls state={`${state}`} />
      <Section className="flex flex-row space-x-6 justify-between">
        <Heading fontSize={5} fontWeight="strong" text={title} />
        <AutoPublish />
      </Section>
      <Artifacts artifacts={artifacts} />
    </Section>
  );
};

export type Deploys = {
  variants?: typeof deploys;
  state: string;
  title?: string;
  artifacts?: ArtifactProps[];
};

Deploys.defaultProps = {
  title: 'Deploys',
  variants: deploys,
};
