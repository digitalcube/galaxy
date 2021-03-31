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
      { title: 'Home', href: '' },
      { title: 'Live', href: 'live', items: [{
          title: 'Overview',
          href: 'live'
      },{
        title: 'Domain',
        href: 'live/domain'
      },{
        title: 'Analytics',
        href: 'live/analytics'
      }]
      },
      { title: 'Staging', href: 'staging' },
      { title: 'Dev', href: 'dev' },
      { title: 'Team', href: 'team' },
      { title: 'Settings', href: 'settings' },
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
                <Route path={`/${admin}/${sites}/:siteId/live/domain`} component={PageDomain} />
                <Route path={`/${admin}/${sites}/:siteId/live/analytics`} component={PageSub} />
                <Route path={`/${admin}/${sites}/:siteId/live`} component={PageLiveOverview} />
                <Route path={`/${admin}/${sites}/:siteId/:path`} component={PageSub} />
                <Route path={`/${admin}/${sites}/:siteId/`} exact component={PageOverview} />
              </Switch>
        </Section>
    )
}