// src/components/Deploy.js

import React from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem as ReactstrapListGroupItem,
  Badge as ReactstrapBadge,
} from "reactstrap";
import { ChevronRight } from "@styled-icons/material/ChevronRight";
import moment from "moment";
import "moment-duration-format";

function deployBadgeColor(state) {
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

function deployBadgeLabel(state) {
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

export default function Deploy({
  deploy: { id, title, state, start, stop },
  onViewDeploy,
}) {
  return (
    <ReactstrapListGroupItem
      onClick={() => onViewDeploy(id)}
      tag='button'
      action
      className='d-flex align-items-center'>
      <div className='flex-grow-1'>
        <div>
          <ReactstrapBadge color={deployBadgeColor(state)}>
            {deployBadgeLabel(state)}
          </ReactstrapBadge>
        </div>
        <div>
          <small>{title}</small>
        </div>
      </div>
      <div>
        <div>
          {moment(start).calendar(null, {
            sameDay: "[Today at] h:mm A",
            lastDay: "[Yesterday]",
            lastWeek: "[Last] dddd",
            sameElse: "DD/MM/YYYY HH:mm",
          })}
        </div>
        <small>
          Deployed in{" "}
          {moment
            .duration(moment(start).diff(stop), "milliseconds")
            .format("m[m] s[s]")}
        </small>
      </div>
      <div className='pl-3'>
        <ChevronRight size='1rem' />
      </div>
    </ReactstrapListGroupItem>
  );
}

Deploy.propTypes = {
  deploy: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
  }),
  onViewDeploy: PropTypes.func,
};
