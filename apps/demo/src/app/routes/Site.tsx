import React, { FC } from 'react';
import { MenuItems } from '@galaxy/core';
import {
  Route,
    RouteComponentProps,
  Switch,
} from 'react-router-dom';
import {
  Main
} from '@galaxy/views'
import {
  Section,
} from '@galaxy/core'
import { PageSites } from '../pages/Sites';
import { 
  Aside, 
  useInternalLinkBase
} from '@galaxy/shifter-dashboard';

const PageSub: FC<RouteComponentProps> = (props) => {
    return (
        <div>
          <pre>
            <code>{JSON.stringify(props, null, 2)}</code>
          </pre>
        </div>
    );
  };
const siteMenus: MenuItems = [
    { title: 'Home', href: 'home' },
    { title: 'Live', href: 'live' },
    { title: 'Staging', href: 'staging' },
    { title: 'Dev', href: 'dev' },
    { title: 'Team', href: 'team' },
    { title: 'Settings', href: 'settings' },
]
export const RouteSite: FC = () => {
  const {
    sites
  } = useInternalLinkBase()
    return (
        <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
          <Aside items={siteMenus} name={`{name}`} />
          <Main>
              <Switch>
                <Route path="/:path" component={PageSub} />
                <Route path="/" exact component={PageSites} />
              </Switch>
          </Main>
        </Section>
    )
}