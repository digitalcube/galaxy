import React, { FC, ReactNode } from 'react';
import { useThemeUI, IconButton } from 'theme-ui';
import { Times, Bars } from '@styled-icons/fa-solid';
import Popup from 'reactjs-popup';
import { Flex } from 'theme-ui';
import { Nav } from '../../components/Nav';
import { NavLink } from '../../components/NavLink';
import { Container } from '../../components/Container';
import { Link } from '../../components/Link';
import { Brand } from '../../components/Brand';

type MobileNav = {
  nodes?: NavLink[];
  brand?: ReactNode;
  sx?: object;
};

export const MobileNav: FC<MobileNav> = ({ nodes, sx, brand }: MobileNav) => {
  const context = useThemeUI();
  const { theme } = context;
  const iconSize = theme?.space ? theme?.space[2] : ``;

  if (!nodes) return null;
  const overlayStyle = { background: theme?.colors?.background };
  const contentStyle = { margin: '', display: 'flex', width: '100%' };

  return (
    <Container sx={{ ...sx }}>
      <Popup
        modal
        trigger={
          <IconButton>
            <Bars size={`${iconSize}`} />
          </IconButton>
        }
        {...{
          contentStyle,
          overlayStyle,
        }}
      >
        {(close: any) => (
          <Container
            sx={{
              pt: 3,
              pb: 6,
              mx: 4,
            }}
            size="4"
          >
            <Flex
              sx={{
                justifyContent: 'space-between',
                pb: 4,
              }}
            >
              <Flex>
                <Link href="/">{brand}</Link>
              </Flex>
              <Flex
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
              >
                <IconButton
                  onClick={() => {
                    close();
                  }}
                >
                  <Times size={`${iconSize}`} />
                </IconButton>
              </Flex>
            </Flex>
            <Nav kind="mobile" navItems={nodes} />
          </Container>
        )}
      </Popup>
    </Container>
  );
};

MobileNav.defaultProps = {
  brand: <Brand asset="shifter-mark" size="45" />,
  nodes: [
    {
      label: `Qui sint`,
      href: `#!`,
    },
    {
      label: `Cupidatat`,
      href: `#!`,
    },
    {
      label: `Excepteur`,
      href: `#!`,
    },
    {
      label: `Laborum`,
      href: `#!`,
    },
    {
      label: `Pariatur`,
      href: `#!`,
    },
    {
      label: `Login`,
      href: `#!`,
    },
    {
      label: `Sign Up`,
      href: `#!`,
      kind: `primary`,
    },
  ],
};
