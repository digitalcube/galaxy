import React, { FC } from 'react';
import {
  fakerArtifacts,
  Heading,
  Section,
  css,
  fakerDomainState,
} from '@galaxy/core';
import { WpControls, AutoPublish } from '@galaxy/views';
import { Artifacts } from '@galaxy/shifter-dashboard';
import { deploysTheme } from './Deploys.galaxy';
const { deploys } = deploysTheme;

export const Deploys: FC<Deploys> = ({ variants, state, title }: Deploys) => {
  const deploysCss = css({ variants: variants });

  return (
    <Section className={`${deploysCss}`}>
      <WpControls state={`${state}`} />
      <Section className="flex flex-row space-x-6 justify-between">
        <Heading fontSize={5} fontWeight="strong" text={title} />
        <AutoPublish />
      </Section>
      <Artifacts artifacts={fakerArtifacts} />
    </Section>
  );
};

export type Deploys = {
  variants?: typeof deploys;
  state: string;
  title: string;
};

Deploys.defaultProps = {
  variants: deploys,
  title: 'Deploys',
  state: fakerDomainState,
};
