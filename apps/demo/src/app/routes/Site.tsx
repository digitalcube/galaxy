import React, { FC, useMemo } from 'react';
import { MenuItems } from '@galaxy/core';
import {
  Redirect,
  Route,
    RouteComponentProps,
  Switch,
  useParams,
} from 'react-router-dom';
import {
  Section,
} from '@galaxy/core'
import { 
  Aside, 
  useInternalLinkBase
} from '@galaxy/shifter-dashboard';
import { PageOverview } from '../pages/sites/Overview'
import { PageLiveOverview } from '../pages/sites/live/Overview'
import { PageDomain } from '../pages/sites/live/Domain'
import { PageStaging } from '../pages/sites/Staging';
import { PageDevEnvironment } from '../pages/sites/dev/Environment';
import { PageCDN } from '../pages/sites/dev/CDN';
import { PageWebhooks } from '../pages/sites/dev/Webhooks';
import { PageSiteSetting } from '../pages/sites/Settings';

const PageSub: FC<RouteComponentProps> = (props) => {
    return (
        <div>
          <pre>
            <code>{JSON.stringify(props, null, 2)}</code>
          </pre>
        </div>
    );
  };
export const RouteSite: FC = () => {
  const {
    sites,admin,
  } = useInternalLinkBase()
  const {siteId} = useParams<{
    siteId?: string;
  }>()
  const siteMenus: MenuItems = [
      {
        title: 'Home',
        href: '' 
      },{
        title: 'Live',
        href: 'live',
        items: [{
            title: 'Overview',
            href: 'live'
        },{
          title: 'Domain',
          href: 'live/domains'
        },{
          title: 'Analytics',
          href: 'live/analytics'
        }]
      },
      {
        title: 'Staging',
        href: 'staging' 
      },{
        title: 'Dev',
        href: 'dev',
        items: [{
          title: 'Environment',
          href: 'dev',
        }, {
          title: 'Media CDN',
          href: 'dev/cdn'
        }, {
          title: 'Webhooks',
          href: 'dev/webhooks'
        }, {
          title: 'Access Logs',
          href: 'dev/access-logs'
        }, {
          title: 'Basic Auth',
          href: 'dev/basic-auth'
        }, {
          title: 'Emergency Actions',
          href: 'dev/emergency-actions'
        }, {
          title: 'Errors',
          href: 'dev/errors'
        }]
      },
      {
        title: 'Team',
        href: 'team'
      },
      {
        title: 'Settings',
        href: 'settings'
      },
  ]
  const menus = useMemo(() => {
    return siteMenus.map(menu => ({
      ...menu,
      href: `/${[admin, sites, siteId, menu.href].join('/')}`,
      items: menu.items ? menu.items.map(m => ({
        ...m,
        href: `/${[admin, sites, siteId, m.href].join('/')}`
      })): undefined
    }))
  }, [siteId, siteMenus, sites])
    return (
        <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
          <Aside items={menus} name={`{name}`} />
              <Switch>
                <Redirect from={`/${admin}/${sites}/:siteId/home`} to={`/${admin}/${sites}/:siteId/`} />
                <Route path={`/${admin}/${sites}/:siteId/live/domains`} component={PageDomain} />
                <Route path={`/${admin}/${sites}/:siteId/live/analytics`} component={PageSub} />
                <Route path={`/${admin}/${sites}/:siteId/live`} component={PageLiveOverview} />
                <Route path={`/${admin}/${sites}/:siteId/staging`} component={PageStaging} />
                <Route path={`/${admin}/${sites}/:siteId/dev/cdn`} component={PageCDN} />
                <Route path={`/${admin}/${sites}/:siteId/dev/webhooks`} component={PageWebhooks} />
                <Route path={`/${admin}/${sites}/:siteId/dev/access-logs`} component={PageSub} />
                <Route path={`/${admin}/${sites}/:siteId/dev/basic-auth`} component={PageSub} />
                <Route path={`/${admin}/${sites}/:siteId/dev/emergency-actions`} component={PageSub} />
                <Route path={`/${admin}/${sites}/:siteId/dev/errors`} component={PageSub} />
                <Route path={`/${admin}/${sites}/:siteId/dev/`} component={PageDevEnvironment} />
                <Route path={`/${admin}/${sites}/:siteId/team`} component={PageSub} />
                <Route path={`/${admin}/${sites}/:siteId/settings`} component={PageSiteSetting} />
                <Route path={`/${admin}/${sites}/:siteId/`} exact component={PageOverview} />
              </Switch>
        </Section>
    )
}