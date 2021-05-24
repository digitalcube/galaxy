import React, { FC } from 'react';
import { fakerHome } from '@galaxy/faker';
import { Main } from '@galaxy/views';
import { Container } from '@galaxy/shifter-dashboard';

const useDummyProps = () => {
  return {
    state: 'running',
  };
};

const usePageEnvironment = () => {
  return (fakerHome as any) as PageDevEnvironmentProps;
};

export const PageDevEnvironment: FC = () => {
  const { state } = useDummyProps();
  const { siteId } = usePageEnvironment();

  return (
    <Main title="Environment Information" schema="dashboard">
      <Container
        {...{
          wpVersion: {
            version: '0.10.1',
          },
          phpVersion: {
            version: '3.5.9',
          },
        }}
      />
    </Main>
  );
};

export type PageDevEnvironmentProps = {
  state: string;
  siteId: string;
};
