import React, { FC } from 'react';
import { Card, Section, css } from '@galaxy/core';
import { WpVersion, PhpVersion } from '@galaxy/shifter-dashboard';
import { containerTheme } from './Container.galaxy';
const { container } = containerTheme;

export const Container: FC<Container> = ({
  variants,
  title,
  wpVersion,
  phpVersion,
}: Container) => {
  const containerCss = css({ variants: variants });
  return (
    <Card title={title}>
      <div className={`${containerCss}`}>
        <Section className="space-y-4">
          <WpVersion {...wpVersion} />
          <PhpVersion {...phpVersion} />
        </Section>
      </div>
    </Card>
  );
};

export type Container = {
  title?: string;
  wpVersion: WpVersion;
  phpVersion: PhpVersion;
  variants: typeof container;
};

Container.defaultProps = {
  title: 'Container Info',
  variants: container,
};
