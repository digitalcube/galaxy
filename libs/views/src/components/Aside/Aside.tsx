import React, { FC, ReactNode } from 'react';
import { Section, Panel, Button, Heading, Menu, MenuItems } from '@galaxy/core';

export const Aside: FC<AsideProps> = ({ items, name, subHeading }) => {
  return (
    <Section className="flex-none w-full md:max-w-xs">
      <Panel className="flex flex-col border-b space-y-4 border-shifter-gray-200">
        <Section>
          <Button className="relative pl-10" variant="ghost" href="/admin/">
            <span className="absolute inset-y-0 pl-2 left-0 flex items-center text-shifter-purple-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </span>
            All Sites
          </Button>
        </Section>
        <Section className="space-y-4">
          <Heading fontSize={6} text={name} fontWeight="strong" />
          <Section>
            {subHeading}
          </Section>
        </Section>
      </Panel>
      <Panel>
        <Menu alignment="vertical" items={items} />
      </Panel>
    </Section>
  );
};

export type AsideProps = {
  name: string;
  items: MenuItems;
  subHeading?: ReactNode
};
