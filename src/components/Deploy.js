// src/components/Deploy.js

import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem, Badge } from "reactstrap";
import { ChevronRight } from "@styled-icons/material/ChevronRight";
import moment from "moment";

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
    <ListGroupItem
      onClick={() => onViewDeploy(id)}
      tag='button'
      action
      className='d-flex align-items-center'>
      <div className='flex-grow-1'>
        <div>
          <Badge color={deployBadgeColor(state)}>
            {deployBadgeLabel(state)}
          </Badge>
        </div>
        <div>
          <small>{title}</small>
        </div>
      </div>
      <div>
        <div>
          {moment(start).calendar(null, {
            sameDay: "h:mm A",
            nextDay: "[Tomorrow]",
            nextWeek: "dddd",
            lastDay: "[Yesterday]",
            lastWeek: "[Last] dddd",
            sameElse: "DD/MM/YYYY HH:mm",
          })}
        </div>
        <small>{moment(stop).diff(start, "minutes")}</small>
      </div>
      <div className='pl-3'>
        <ChevronRight size='1rem' />
      </div>
    </ListGroupItem>
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
