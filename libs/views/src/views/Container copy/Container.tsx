import React, { FC } from 'react';
import classNames from 'classnames';
import { Card, Heading, Section } from '@galaxy/core';
import { WpVersion, PhpVersion } from '@galaxy/views';
import { schema } from './galaxy.config.js';

export const Container: FC<Container> = ({
  variant,
  title,
  wpVersion,
  phpVersion,
}: Container) => {
  return (
    <Card>
      <div
        className={`flex flex-col px-3 py-6 space-y-6 ${containerVariants({
          variant,
        })}`}
      >
        <Heading variant="primary" fontWeight="strong" fontSize="6">
          {title}
        </Heading>
        <Section className="space-y-4">
          <WpVersion {...wpVersion} />
          <PhpVersion {...phpVersion} />
        </Section>
      </div>
    </Card>
  );
};

export type Container = {
  variant?: 'light' | 'dark' | string;
  title?: string;
  wpVersion: WpVersion;
  phpVersion: PhpVersion;
};

Container.defaultProps = {
  variant: 'light',
  title: 'Container Info',
};

const containerVariants = ({ variant }: Container) => {
  const variants = schema.components.container.variants;
  const DEFAULT = schema.components.container.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};
