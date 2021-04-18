import React, { FC } from 'react';
import { Main } from '@galaxy/views';
import { WpDashboard } from '@galaxy/shifter-dashboard';

export const PageSiteWpAdmin: FC = () => {
  return (
    <Main title="WordPress Dashboard">
      <WpDashboard img="./assets/wp-dashboard.png" />
    </Main>
  );
};

export type PageSiteWpAdminProps = {
  img: string;
  label: string;
};
