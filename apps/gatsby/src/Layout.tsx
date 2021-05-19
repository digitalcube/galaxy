import React, { FC } from 'react';
import { GalaxyThemeProvider, Panel, Link } from '@galaxy/core';
import GitHubRibbon from 'react-github-ribbons';
import { Link as GatsbyLink } from 'gatsby';
import {
  Dashboard
} from '@galaxy/views'

export const Layout: FC = ({ children }) => {
  return (
    <GalaxyThemeProvider internalLinkTag={GatsbyLink}>
      <Dashboard header={{
        items: [{
          label: 'Home',
          href: '/'
        }, {
          label: 'Page1',
          href: '/page1'
        }, {
          label: 'Page2',
          href: '/page2'
        }]
      }}>
        {children}
            <Panel title="Link example" actions={<div />}>
              <ul>
                <li><Link href="/page1">Page1 (Internal)</Link></li>
                <li><Link href="http://google.com">Google (external)</Link></li>
              </ul>
              
            </Panel>
        <GitHubRibbon
          href="https://github.com/digitalcube/galaxy"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Dashboard>
    </GalaxyThemeProvider>
  );
};

export default Layout;
