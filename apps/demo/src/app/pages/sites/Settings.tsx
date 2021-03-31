import React, { FC } from 'react';
import { Main } from '@galaxy/views';

import {
    SiteSettings,
} from '@galaxy/shifter-dashboard';
export const PageSiteSetting: FC = () => {
  return (
    <Main>
        <SiteSettings />
    </Main>
  );
};

export type PageSiteSettingProps = {
};
