import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { fakerHome } from '@galaxy/faker';
import { Main } from '@galaxy/views';

import { WpControls, Container } from '@galaxy/shifter-dashboard';

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
    <Main
      title="Environment Information"
      className="p-8 w-full border-l border-shifter-gray-200 space-y-8"
    >
      <Section>
        <WpControls siteId={siteId} state={state} />
      </Section>
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
