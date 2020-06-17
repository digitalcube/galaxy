// src/components/Deploy.js

import React from "react";
import {
  ListGroupItem as ReactstrapListGroupItem,
  Row,
  Col,
  Container,
} from "reactstrap";
import { ChevronRight } from "@styled-icons/material/ChevronRight";
import moment from "moment";
import "moment-duration-format";
import { Badge } from "./Badge";

type Deploy = {
  deploy: {
    id: string;
    title: string;
    state: string;
    start: string;
    stop: string;
  };
  onViewDeploy: any;
};

type DeployTime = {
  stop?: string;
};

function deployTime({ stop }: DeployTime) {
  const t = moment(stop).calendar(null, {
    sameDay: "[Today at] h:mm A",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] dddd",
    sameElse: "DD/MM/YYYY HH:mm",
  });
  return t;
}

type DeployDuration = {
  start: string;
  stop: string;
};

function deployDuration({ start, stop }: DeployDuration) {
  const d = moment.duration(moment(start).diff(stop)).format("m[m] s[s]");
  return d;
}

export const Deploy = ({
  deploy: { id, title, state, start, stop },
  onViewDeploy,
}: Deploy) => (
  <ReactstrapListGroupItem
    id={id}
    tag='button'
    action
    onClick={() => onViewDeploy(id)}
    className='d-flex align-items-center'>
    <Container fluid>
      <Row>
        <Col sm="8">
          <div className='overflow-hidden'>
            <div>
              <Badge deploy={{ state: state }} />
            </div>
            <div className='text-truncate'>
              <small>{title}</small>
            </div>
          </div>
        </Col>
        <Col className='d-flex justify-content-md-end'>
          <div>
            <div>{deployTime({ stop })}</div>
            <small>Deployed in {deployDuration({ start, stop })}</small>
          </div>
          <div className='pl-3'>
            <ChevronRight size='1rem' />
          </div>
        </Col>
      </Row>
    </Container>
  </ReactstrapListGroupItem>
);
