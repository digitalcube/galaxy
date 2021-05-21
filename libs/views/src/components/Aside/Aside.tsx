import React, { FC, ReactNode } from 'react';
import { Section, Panel, Button, Heading, Menu, MenuItems } from '@galaxy/core';
import { FaArrowLeft } from 'react-icons/fa';

export const Aside: FC<AsideProps> = ({ items, name, subHeading }) => {
  return (
    <Section className="flex-none w-full md:max-w-xs">
      <Panel className="flex flex-col border-b space-y-4 border-shifter-gray-200">
        <Section>
          <Button
            variant="link"
            href="/admin/"
            className="inline-flex flex-row space-x-2 items-center"
          >
            <FaArrowLeft />
            <span>All Sites</span>
          </Button>
        </Section>
        <Section className="space-y-4">
          <Heading fontSize={6} text={name} fontWeight="strong" />
          <Section children={subHeading} />
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
  subHeading?: ReactNode;
};
