import React, { FC } from 'react';
import { Section, PanelProps } from '@galaxy/core';
import { fakerHeader } from '@galaxy/faker';
import { Dashboard, Main, Aside } from '@galaxy/views';
import { SubdirectoryProps, Subdirectory, Site } from '@galaxy/shifter-dashboard';

export const DeploySettings: FC<DeploySettings> = ({
  name,
  items,
  title,
  actions,
  subDirectory,
}) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={`${name}`} />
        <Main
          schema="dashboard"
          actions={actions}
          title={`${title}`}
        >
          <Subdirectory {...subDirectory} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type DeploySettings = {
  items?: any;
  title?: PanelProps['title'];
  actions?: PanelProps['actions'];
  name?: Site['name'];
  subDirectory?: SubdirectoryProps;
};
