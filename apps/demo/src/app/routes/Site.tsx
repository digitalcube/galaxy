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
  Main
} from '@galaxy/views'
import {
  Section,
} from '@galaxy/core'
import { 
  Aside, 
  useInternalLinkBase
} from '@galaxy/shifter-dashboard';
import {
  PageOverview
} from '../pages/sites/Overview'

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
    sites
  } = useInternalLinkBase()
  const {siteId} = useParams<{
    siteId?: string;
  }>()
  const siteMenus: MenuItems = [
      { title: 'Home', href: '' },
      { title: 'Live', href: 'live' },
      { title: 'Staging', href: 'staging' },
      { title: 'Dev', href: 'dev' },
      { title: 'Team', href: 'team' },
      { title: 'Settings', href: 'settings' },
  ]
  const menus = useMemo(() => {
    return siteMenus.map(menu => ({
      ...menu,
      href: `/${[sites, siteId, menu.href].join('/')}`
    }))
  }, [siteId, siteMenus, sites])
    return (
        <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
          <Aside items={menus} name={`{name}`} />
          <Main>
              <Switch>
                <Redirect from={`/${sites}/:siteId/home`} to={`/${sites}/:siteId/`} />
                <Route path={`/${sites}/:siteId/:path`} component={PageSub} />
                <Route path={`/${sites}/:siteId/`} exact component={PageOverview} />
              </Switch>
          </Main>
        </Section>
    )
}