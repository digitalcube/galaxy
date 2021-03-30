import React, { FC } from 'react';
import { Section, progressClass, css } from '@galaxy/core';
import { siteProgressTheme } from './SiteProgress.galaxy';
const { siteProgress } = siteProgressTheme;

export const SiteProgress: FC<SiteProgress> = ({ progress }: SiteProgress) => {
  console.log(progress);
  if (!progress) return null;
  const siteProgressCss = css({ variants: siteProgress });
  return (
    <Section as="div" className="bg-shifter-gray-200">
      <Section
        as="div"
        className={`${progressClass({ progress })} ${siteProgressCss}`}
      />
    </Section>
  );
};
export type ProgressValue = 0 | 1 | 2 | 3 | 4 | 5 | null
export type SiteProgress = {
  progress?: ProgressValue;
};

SiteProgress.defaultProps = {
  progress: null,
};
