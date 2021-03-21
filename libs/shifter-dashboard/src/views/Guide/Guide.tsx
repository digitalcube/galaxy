import React, { FC } from 'react';
import { TechArticle } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';
import { Section, css, Heading, fakerGuide } from '@galaxy/core';
import { guideTheme } from './Guide.galaxy';
const { guide } = guideTheme;

export const Guide: FC<GuideProps> = ({
  className,
  variants,
  schema,
}: GuideProps) => {
  const guideCss = css({
    variants: variants,
  });

  return (
    <>
      <JsonLd<TechArticle>
        item={{
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          ...schema,
        }}
      />
      <Section className={`${guideCss} ${className}`}>
        <Heading fontSize={7} text={schema?.name} />
        <Heading text={schema?.description} />
      </Section>
    </>
  );
};

export type GuideProps = {
  schema?: TechArticle;
  className?: string;
  variants?: typeof guide;
};

Guide.defaultProps = {
  variants: guide,
  schema: {
    '@type': 'TechArticle',
    ...fakerGuide,
  },
};
