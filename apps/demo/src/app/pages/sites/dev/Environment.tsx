import React, { FC } from 'react';
import { fakerHome } from '@galaxy/faker';
import { Main } from '@galaxy/views';
import { ContainerInfo } from '@galaxy/shifter-dashboard';

const useDummyProps = () => {
  return {
    state: 'running',
    containerInfo: {
      wpVersion: {
        version: '0.10.11',
      },
      phpVersion: {
        version: '3.5.9',
      },
    },
  };
};

// const usePageEnvironment = () => {
//   return (fakerHome as any) as PageDevEnvironmentProps;
// };

export const PageDevEnvironment: FC = () => {
  const { containerInfo } = useDummyProps();
  // const { siteId } = usePageEnvironment();

  return (
    <Main title="Environment Information" schema="dashboard">
      <ContainerInfo {...containerInfo} />
    </Main>
  );
};

export type PageDevEnvironmentProps = {
  state: string;
  siteId: string;
};
