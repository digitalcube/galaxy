import React, { FC, useMemo } from 'react';
import { MenuItems } from '@galaxy/core';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import { Section } from '@galaxy/core';
import { Aside, useInternalLinkBase } from '@galaxy/shifter-dashboard';
import { PageOverview } from '../pages/sites/Overview';
import { PageLiveOverview } from '../pages/sites/live/Overview';
import { PageDomain } from '../pages/sites/live/Domain';
import { PageStaging } from '../pages/sites/Staging';
import { PageDevEnvironment } from '../pages/sites/dev/Environment';
import { PageCDN } from '../pages/sites/dev/CDN';
import { PageWebhooks } from '../pages/sites/dev/Webhooks';
import { PageSiteSetting } from '../pages/sites/Settings';
import { PageSiteAnalytics } from '../pages/sites/live/Analytics';
import { PageSiteAccessLogs } from '../pages/sites/dev/AccessLogs';
import { PageSiteBasicAuth } from '../pages/sites/dev/BasicAuth';
import { PageSiteEmergencyAction } from '../pages/sites/dev/EmergencyAction';
import { PageSiteErrors } from '../pages/sites/dev/Errors';
import { PageSiteTeams } from '../pages/sites/Teams';
import { PageSiteWpAdmin } from '../pages/sites/WpAdmin';

export const RouteSite: FC = () => {
  const { sites, admin } = useInternalLinkBase();
  const { siteId } = useParams<{
    siteId?: string;
  }>();
  const siteMenus: MenuItems = [
    {
      label: 'Home',
      href: '',
    },
    {
      label: 'Live',
      href: 'live',
      items: [
        {
          label: 'Overview',
          href: 'live',
        },
        {
          label: 'Domain',
          href: 'live/domains',
        },
        {
          label: 'Analytics',
          href: 'live/analytics',
        },
      ],
    },
    {
      label: 'Staging',
      href: 'staging',
    },
    {
      label: 'Dev',
      href: 'dev',
      items: [
        {
          label: 'Environment',
          href: 'dev',
        },
        {
          label: 'Media CDN',
          href: 'dev/cdn',
        },
        {
          label: 'Webhooks',
          href: 'dev/webhooks',
        },
        {
          label: 'Access Logs',
          href: 'dev/access-logs',
        },
        {
          label: 'Basic Auth',
          href: 'dev/basic-auth',
        },
        {
          label: 'Emergency Actions',
          href: 'dev/emergency-actions',
        },
        {
          label: 'Errors',
          href: 'dev/errors',
        },
      ],
    },
    {
      label: 'Team',
      href: 'team',
    },
    {
      label: 'Settings',
      href: 'settings',
    },
  ];
  const menus = useMemo(() => {
    return siteMenus.map((menu) => ({
      ...menu,
      href: `/${[admin, sites, siteId, menu.href].join('/')}`,
      items: menu.items
        ? menu.items.map((m) => ({
            ...m,
            href: `/${[admin, sites, siteId, m.href].join('/')}`,
          }))
        : undefined,
    }));
  }, [siteId, siteMenus, sites, admin]);
  return (
    <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
      <Aside items={menus} name="Site Name" />
      <Switch>
        <Redirect
          from={`/${admin}/${sites}/:siteId/home`}
          to={`/${admin}/${sites}/:siteId/`}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/live/domains`}
          component={PageDomain}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/live/analytics`}
          component={PageSiteAnalytics}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/live`}
          component={PageLiveOverview}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/staging`}
          component={PageStaging}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/dev/cdn`}
          component={PageCDN}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/dev/webhooks`}
          component={PageWebhooks}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/dev/access-logs`}
          component={PageSiteAccessLogs}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/dev/basic-auth`}
          component={PageSiteBasicAuth}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/dev/emergency-actions`}
          component={PageSiteEmergencyAction}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/dev/errors`}
          component={PageSiteErrors}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/dev/`}
          component={PageDevEnvironment}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/team`}
          component={PageSiteTeams}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/settings`}
          component={PageSiteSetting}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/wp-admin`}
          exact
          component={PageSiteWpAdmin}
        />
        <Route
          path={`/${admin}/${sites}/:siteId/`}
          exact
          component={PageOverview}
        />
      </Switch>
    </Section>
  );
};
