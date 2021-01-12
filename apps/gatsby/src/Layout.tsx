import React, { FC } from 'react';
import {
  Header,
  ShifterThemeProvider,
} from '@galaxy/shifter-web';
import GitHubRibbon from 'react-github-ribbons';
import { Link } from 'gatsby'

 export const Layout:FC = ({children}) => {
  return (
    <ShifterThemeProvider linkType={Link}>
      <Header
        href="/"
        brand={<>Gatsby example</>}
        nav={[
          [
            {
              label: `home`,
              href: `/`,
            },
            {
              label: `page1`,
              href: `/page1`,
            },
            {
              label: `page2-sub`,
              href: `/page2/sub`,
            },
          ]
          ]
        }
      />
      {children}
      <GitHubRibbon href="https://github.com/digitalcube/galaxy" target="_blank" rel="noopener noreferrer"/>
    </ShifterThemeProvider>
  );
}

export default Layout;
