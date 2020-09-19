import React, { FC, ReactNode } from 'react';
import { Badge as ThemeUIBadge } from 'theme-ui';

type Badge = {
  children?: ReactNode;
  kind?: string;
};

export const Badge: FC<Badge> = ({ children, kind = 'primary' }: Badge) => {
  if (!children) return null;
  return <ThemeUIBadge variant={kind}>{children}</ThemeUIBadge>;
};

// // src/components/Badge.js

// import React from 'react';
// import styled from 'styled-components';

// type Badge = {
//   deploy?: {
//     state: string;
//   };
//   setting?: {
//     state: string;
//   };
//   label?: string;
//   color?: string;
//   id?: string;
// };

// // function badgeLabel({ deploy, setting, label }: Badge) {
// //   if (deploy) {
// //     return deployBadgeLabel({ state: deploy.state })
// //   }
// //   if (setting) {
// //     return settingBadgeLabel({ state: setting.state })
// //   }
// //   return label
// // }

// // function badgeColor({ deploy, setting, color }: Badge) {
// //   if (deploy) {
// //     return deployBadgeColor({ state: deploy.state })
// //   }
// //   if (setting) {
// //     return settingBadgeColor({ state: setting.state })
// //   }
// //   return color
// // }

// const StyledBadge = styled.span`
//   background-color: #6c757d;
//   display: inline-block;
//   padding: 0.25em 0.5em;
//   font-size: 0.75em;
//   font-weight: normal;
//   line-height: 1;
//   color: white;
//   text-align: center;
//   white-space: nowrap;
//   vertical-align: baseline;
//   border-radius: 0.25rem;
//   &:empty {
//     display: none;
//   }
// `;

// export const Badge = (props: Badge) => (
//   <StyledBadge>
//     {/* {badgeLabel({ deploy, setting, label })} */}
//     hello
//   </StyledBadge>
// );
