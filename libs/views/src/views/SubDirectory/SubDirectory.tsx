import React, { FC } from 'react';
import { Section, Button, Heading, Card, Input, Toggle } from '@galaxy/core';

export const SubDirectory: FC<SubDirectory> = ({ title, description }) => {
  return (
    <Section className="space-y-4">
      <Card
        className="space-y-8"
        title={title}
        description={description}
      >
        <Section className="space-y-4">
          <Heading fontSize="4" fontWeight="strong">
            Enter the subdirectory where you would like to publish deploys
          </Heading>
          <Input />
        </Section>
        <Button label={`Publish to this subdirectory`} />
      </Card>
      <Card
        className="space-y-8"
        title={title}
        description={description}
      >
        <Card className="space-y-8">
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
  description?: string;
};

SubDirectory.defaultProps = {
  title: 'Publish deploys to a subdirectory',
  description:
    'You can publish Shifter artifacts to a subdirectory of a site you already own (for example, yoursite.com/blog)',
};
