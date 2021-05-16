import React, { FC, useState } from 'react';
import {
  SiteState,
  WpAdmin,
  BuildDeploy,
  SiteOptions,
  Site,
} from '@galaxy/shifter-dashboard';
import { Section } from '@galaxy/core';

/**
 * Provide a several features to run the application for mock.
 * If you want to use it for prod, should replace to redux.
 */
const useMockFeatures = ({ state }: Pick<Site, 'state'>) => {
  const [siteState, setSiteState] = useState(state);
  return {
    siteState,
    setSiteState,
  };
};

export const WpControls: FC<WpControls> = ({ state, siteId }: WpControls) => {
  const { siteState, setSiteState } = useMockFeatures({ state });
  return (
    <Section className="flex flex-row items-center justify-between border-b pb-4 border-shifter-gray-200">
      <Section className="flex items-center space-x-4 divide-x">
        <SiteState state={`${state}`} />
        <div className="pl-4">
          <SiteOptions
            state={siteState}
            handleChangeSiteState={setSiteState}
            variant="list"
          />
        </div>
      </Section>
      <Section className="flex items-center space-x-6">
        <WpAdmin siteId={`${siteId}`} />
        <BuildDeploy />
      </Section>
    </Section>
  );
};

export type WpControls = {
  state: string;
  siteId: string;
  variant?: string;
};

WpControls.defaultProps = {
  state: 'stopped',
};
