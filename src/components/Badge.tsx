// src/components/Badge.js

import React from "react";
import { Badge as ReactstrapBadge } from "reactstrap";

type DeployBadge = {
  state: string;
};

function deployBadgeColor({ state }: DeployBadge) {
  switch (state) {
    case "DEPLOY_PUBLISHED":
      return "success";
    case "DEPLOY_BUILDING":
      return "warning";
    case "DEPLOY_FAILED":
      return "danger";
    case "DEPLOY_READY":
      return "primary";
    default:
      return;
  }
}

function deployBadgeLabel({ state }: DeployBadge) {
  switch (state) {
    case "DEPLOY_PUBLISHED":
      return "Published";
    case "DEPLOY_BUILDING":
      return "Building";
    case "DEPLOY_FAILED":
      return "Failed";
    case "DEPLOY_READY":
      return "Ready";
    default:
      return;
  }
}

type SettingBadge = {
  state: string;
};

function settingBadgeColor({ state }: SettingBadge) {
  switch (true) {
    case /_ENABLED/.test(state):
      return "success";
    case /_DISABLED/.test(state):
      return "danger";
    default:
      return state;
  }
}

function settingBadgeLabel({ state }: SettingBadge) {
  switch (true) {
    case /SETTING_AUTO_DEPLOY_ENABLED/.test(state):
      return "Auto Deploy Enabled";
    case /SETTING_AUTO_DEPLOY_DISABLED/.test(state):
      return "Auto Deploy Disabled";
    case /_ENABLED/.test(state):
      return "Enabled";
    case /_DISABLED/.test(state):
      return "Disabled";
    default:
      return state;
  }
}

type Badge = {
  deploy?: {
    state: string;
  };
  setting?: {
    state: string;
  };
};

function badgeLabel({ deploy, setting }: Badge) {
  if (deploy) {
    return deployBadgeLabel({ state: deploy.state });
  }
  if (setting) {
    return settingBadgeLabel({ state: setting.state });
  }
  return;
}

function badgeColor({ deploy, setting }: Badge) {
  if (deploy) {
    return deployBadgeColor({ state: deploy.state });
  }
  if (setting) {
    return settingBadgeColor({ state: setting.state });
  }
  return;
}

export const Badge = ({ deploy, setting }: Badge) => (
  <ReactstrapBadge color={badgeColor({ deploy, setting })}>
    {badgeLabel({ deploy, setting })}
  </ReactstrapBadge>
);
