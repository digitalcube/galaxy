// src/components/Badge.js

import React from "react"
import styled from "styled-components"

// type DeployBadge = {
//   state: string
// }

// function deployBadgeColor({ state }: DeployBadge) {
//   switch (state) {
//     case `DEPLOY_PUBLISHED`:
//       return `success`
//     case `DEPLOY_BUILDING`:
//       return `warning`
//     case `DEPLOY_FAILED`:
//       return `danger`
//     case `DEPLOY_READY`:
//       return `primary`
//     default:
//       return null
//   }
// }

// function deployBadgeLabel({ state }: DeployBadge) {
//   switch (state) {
//     case `DEPLOY_PUBLISHED`:
//       return `Published`
//     case `DEPLOY_BUILDING`:
//       return `Building`
//     case `DEPLOY_FAILED`:
//       return `Failed`
//     case `DEPLOY_READY`:
//       return `Ready`
//     default:
//       return null
//   }
// }

// type SettingBadge = {
//   state: string
// }

// function settingBadgeColor({ state }: SettingBadge) {
//   switch (true) {
//     case /_ENABLED/.test(state):
//       return `success`
//     case /_DISABLED/.test(state):
//       return `danger`
//     default:
//       return state
//   }
// }

// function settingBadgeLabel({ state }: SettingBadge) {
//   switch (true) {
//     case /SETTING_AUTO_DEPLOY_ENABLED/.test(state):
//       return `Auto Deploy Enabled`
//     case /SETTING_AUTO_DEPLOY_DISABLED/.test(state):
//       return `Auto Deploy Disabled`
//     case /_ENABLED/.test(state):
//       return `Enabled`
//     case /_DISABLED/.test(state):
//       return `Disabled`
//     default:
//       return state
//   }
// }

type Badge = {
  deploy?: {
    state: string
  }
  setting?: {
    state: string
  }
  label?: string
  color?: string
  id?: string
}

// function badgeLabel({ deploy, setting, label }: Badge) {
//   if (deploy) {
//     return deployBadgeLabel({ state: deploy.state })
//   }
//   if (setting) {
//     return settingBadgeLabel({ state: setting.state })
//   }
//   return label
// }

// function badgeColor({ deploy, setting, color }: Badge) {
//   if (deploy) {
//     return deployBadgeColor({ state: deploy.state })
//   }
//   if (setting) {
//     return settingBadgeColor({ state: setting.state })
//   }
//   return color
// }

const StyledBadge = styled.span`
  background-color: #6c757d;
  display: inline-block;
  padding: 0.25em 0.5em;
  font-size: 0.75em;
  font-weight: normal;
  line-height: 1;
  color: white;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  &:empty {
    display: none;
  }
`

export const Badge = ({ deploy, setting, label, color, id }: Badge) => (
  <StyledBadge>
    {/* {badgeLabel({ deploy, setting, label })} */}
    hello
  </StyledBadge>
)
