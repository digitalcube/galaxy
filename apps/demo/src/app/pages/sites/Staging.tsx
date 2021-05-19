import React, { FC } from 'react';
import { fakerArtifacts } from '@galaxy/faker';
import { Main } from '@galaxy/views';

import { ArtifactProps, Deploys } from '@galaxy/shifter-dashboard';

const useDummyProps = () => {
  return {
    state: 'running',
    artifacts: fakerArtifacts,
  };
};

export const PageStaging: FC = () => {
  const { artifacts, state } = useDummyProps();
  return (
    <Main
      title="Staging"
      className="p-8 w-full border-l border-shifter-gray-200 space-y-8"
    >
      <Deploys artifacts={artifacts} state={state} />
    </Main>
  );
};

export type PageStagingProps = {
  artifacts: ArtifactProps[];
  state: string;
};
