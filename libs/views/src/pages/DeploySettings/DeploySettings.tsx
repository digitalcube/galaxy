import React, { FC } from 'react';
import {
  Section,
  Button,
  Heading,
  Menu,
  Panel,
  fakerHeader,
  Card,
  Input,
} from '@galaxy/core';
import { SiteState, Site, Dashboard } from '@galaxy/views';

export const DeploySettings: FC<DeploySettings> = ({
  name,
  items,
  title,
  actions,
}) => {
  return (
    <Dashboard {...fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Section className="flex-none w-full md:max-w-xs">
          <Panel className="flex flex-col border-b space-y-4">
            <Section>
              <Button className="relative pl-10" variant="ghost">
                <span className="absolute inset-y-0 pl-2 left-0 flex items-center text-shifter-purple-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </span>
                All Sites
              </Button>
            </Section>
            <Section className="space-y-2">
              <Heading fontWeight="strong" fontSize="6">
                {name}
              </Heading>
              <Section>
                <SiteState state="starting" />
              </Section>
            </Section>
          </Panel>
          <Panel>
            <Menu alignment="vertical" items={items} />
          </Panel>
        </Section>
        <Panel
          className="flex-1 md:border-l mb-6"
          title={`${title}`}
          actions={actions}
        >
          <Section className="space-y-4">
            <Card className="px-3 py-6 space-y-8">
              <Section className="space-y-4">
                <Heading fontSize="6" fontWeight="strong">
                  Publish deploys to a subdirectory
                </Heading>
                <Heading fontSize="3">
                  You can publish Shifter artifacts to a subdirectory of a site
                  you already own (for example, yoursite.com/blog)
                </Heading>
              </Section>
              <Section className="space-y-4">
                <Heading fontSize="4" fontWeight="strong">
                  Enter the subdirectory where you would like to publish deploys
                </Heading>
                <Input />
              </Section>
              <Button label={`Publish to this subdirectory`} />
            </Card>
          </Section>
        </Panel>
      </Section>
    </Dashboard>
  );
};

export type DeploySettings = {
  items?: any;
  title?: Panel;
  actions?: Panel;
  name: Site;
};
