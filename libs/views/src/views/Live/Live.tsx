import React, { FC, ReactNode } from 'react';
import { Section, Button, Heading, Menu, SiteState, Card } from '@galaxy/core';
import { Overview } from '@galaxy/views';

export const Panel: FC<Panel> = ({ children, className }) => {
  return (
    <Section className={`${className} py-6 px-8 border-shifter-gray-200`}>
      {children}
    </Section>
  );
};

export type Panel = {
  children?: ReactNode;
  className?: string;
};

export const Live: FC<Live> = ({ overview }) => {
  const items = [
    { title: 'Sites', url: 'sites' },
    { title: 'Teams', url: 'teams' },
    { title: 'Guides', url: 'guides' },
  ];
  return (
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
            <Heading fontSize="6">Stable Value Investments, Inc.</Heading>
            <Section>
              <SiteState state="starting" />
            </Section>
          </Section>
        </Panel>
        <Panel>
          <Menu alignment="vertical" items={items} />
        </Panel>
      </Section>
      <Panel className="flex-1 md:border-l">
        <Overview {...overview} />
      </Panel>
    </Section>
  );
};

export type Live = {
  overview?: Overview;
};
