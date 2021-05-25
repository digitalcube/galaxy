import React from 'react';
import { Card, Section, css, Heading } from '@galaxy/core';
import { FaWordpress } from 'react-icons/fa';
import { DiPhp } from 'react-icons/di';
import { containerTheme } from './container-info.galaxy';
const { container } = containerTheme;

export function PhpVersion(props: PhpVersionProps) {
  const { title = 'PHP version', version = '' } = props;
  if (!version) return null;
  return (
    <Section className="space-x-2 flex flex-row items-center">
      <DiPhp />
      <Heading variant="primary" text={`${title} ${version}`} />
    </Section>
  );
}

export type PhpVersionProps = {
  title?: string;
  version?: string;
};

export function WpVersion(props: WpVersionProps) {
  const { title = 'WP version', version = '' } = props;
  if (!version) return null;
  return (
    <Section className="space-x-2 flex flex-row items-center">
      <FaWordpress />
      <Heading variant="primary" text={`${title} ${version}`} />
    </Section>
  );
}

export type WpVersionProps = {
  title?: string;
  version?: string;
};

/* eslint-disable-next-line */
export interface ContainerInfoProps {
  title?: string;
  wpVersion?: WpVersionProps;
  phpVersion?: PhpVersionProps;
  variants?: any;
  variant?: string;
}

export function ContainerInfo(props: ContainerInfoProps) {
  const { variants, title, wpVersion, phpVersion } = props;
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
}

export default ContainerInfo;

ContainerInfo.defaultProps = {
  title: 'Container Info',
  variants: container,
};
