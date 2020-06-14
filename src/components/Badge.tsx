// src/components/Badge.js

import React from "react";
import { Badge as ReactstrapBadge } from "reactstrap";

type Badge = {
  state: string;
};

function deployBadgeColor({ state }: Badge) {
  switch (state) {
    case "DEPLOY_PUBLISHED":
      return "success";
    case "DEPLOY_BUILDING":
      return "warning";
    case "DEPLOY_FAILED":
      return "danger";
    default:
      return "primary";
  }
}

function deployBadgeLabel({ state }: Badge) {
  switch (state) {
    case "DEPLOY_PUBLISHED":
      return "Published";
    case "DEPLOY_BUILDING":
      return "Building";
    case "DEPLOY_FAILED":
      return "Failed";
    default:
      return "Ready";
  }
}

export const Badge = ({ state }: Badge) => (
  <ReactstrapBadge color={deployBadgeColor({ state })}>
    {deployBadgeLabel({ state })}
  </ReactstrapBadge>
);
