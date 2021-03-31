import React, { FC } from 'react';
import { MenuItems, Section } from '@galaxy/core';
import { Main } from '@galaxy/views';

import {
  ProgressValue,
  WpControls,
  Container
} from '@galaxy/shifter-dashboard';

const useDummyProps = () => {
    return {
        state: 'running',
    }
}

export const PageDevEnvironment: FC = () => {
    const {
        state,
      } = useDummyProps()
  return (
    <Main>
        <Section>
            <WpControls state={state} />
        </Section>
        <Container {...{
            wpVersion: {
                version: '0.10.1'
            },
            phpVersion: {
                version: '3.5.9'
            }
        }}/>
    </Main>
  );
};

export type PageDevEnvironmentProps = {
  state: string;
};
