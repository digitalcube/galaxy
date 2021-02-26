import React, { FC } from 'react';
import { Section, Button, Heading, Card, Input, Toggle } from '@galaxy/core';

export const SubDirectory: FC<SubDirectory> = ({ title }) => {
  return (
    <Section className="space-y-4">
      <Card className="px-3 py-6 space-y-8">
        <Section className="space-y-4">
          <Heading fontSize="6" fontWeight="strong">
            {title}
          </Heading>
          <Heading fontSize="3">
            You can publish Shifter artifacts to a subdirectory of a site you
            already own (for example, yoursite.com/blog)
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
      <Card className="px-3 py-6 space-y-8">
        <Section className="space-y-4">
          <Heading fontSize="6" fontWeight="strong">
            {title}
          </Heading>
          <Heading fontSize="3">
            You can publish Shifter artifacts to a subdirectory of a site you
            already own (for example, yoursite.com/blog)
          </Heading>
        </Section>
        <Card className="py-6 space-y-8">
          <Section className="space-y-4">
            <Section className="px-3 pb-4 flex flex-row justify-between border-b border-shifter-gray-200">
              <Heading fontSize="4" fontWeight="strong">
                Subdirectory deploy is{' '}
                <span className="text-status-success-default">on.</span>
              </Heading>
              <Toggle state={true} />
            </Section>
            <Section className="px-3">
              <Input />
            </Section>
          </Section>
          <Section className="space-y-4 px-3">
            <Button label={`Update`} />
          </Section>
        </Card>
      </Card>
    </Section>
  );
};

export type SubDirectory = {
  title?: string;
};

SubDirectory.defaultProps = {
  title: 'Publish deploys to a subdirectory',
};
