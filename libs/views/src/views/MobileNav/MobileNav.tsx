import React, { FC, ReactNode } from 'react';
import { useThemeUI, IconButton } from 'theme-ui';
import { Bars } from '@styled-icons/fa-solid/Bars';
import { Times } from '@styled-icons/fa-solid/Times';
import Popup from 'reactjs-popup';
import { Flex } from 'theme-ui';
import { Nav, NavLinkProps, Container, Link } from '@digitalcube/galaxy-core';

export type MobileNavProps = {
  nodes?: NavLinkProps[];
  brand?: ReactNode;
  sx?: object;
};

export const MobileNav: FC<MobileNavProps> = ({ nodes, sx, brand }) => {
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
