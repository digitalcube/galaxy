// src/components/Deploy.js

import React from "react";
import { ListGroupItem as ReactstrapListGroupItem } from "reactstrap";
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
  const d = moment(start).diff(stop);
  return d;
}

export const Deploy = ({
  deploy: { id, title, state, start, stop },
}: Deploy) => (
  <ReactstrapListGroupItem
    id={id}
    tag='button'
    action
    className='d-flex align-items-center'>
    <div className='flex-grow-1'>
      <div>
        <Badge state={state} />
      </div>
      <div>
        <small>{title}</small>
      </div>
    </div>
    <div>
      <div>{deployTime({ stop })}</div>
      <small>Deployed in {deployDuration({ start, stop })}</small>
    </div>
    <div className='pl-3'>
      <ChevronRight size='1rem' />
    </div>
  </ReactstrapListGroupItem>
);

// export default function Deploy({
//   deploy: { id, title, state, start, stop },
//   onViewDeploy,
// }) {
//   return (
//     <ReactstrapListGroupItem
//       onClick={() => onViewDeploy(id)}
//       tag='button'
//       action
//       className='d-flex align-items-center'>
//       <div className='flex-grow-1'>
//         <div>
//           <ReactstrapBadge color={deployBadgeColor(state)}>
//             {deployBadgeLabel(state)}
//           </ReactstrapBadge>
//         </div>
//         <div>
//           <small>{title}</small>
//         </div>
//       </div>
//       <div>
//         <div>
//           {moment(start).calendar(null, {
//             sameDay: "[Today at] h:mm A",
//             lastDay: "[Yesterday]",
//             lastWeek: "[Last] dddd",
//             sameElse: "DD/MM/YYYY HH:mm",
//           })}
//         </div>
//         <small>
//           Deployed in{" "}
//           {moment
//             .duration(moment(start).diff(stop), "milliseconds")
//             .format("m[m] s[s]")}
//         </small>
//       </div>
//       <div className='pl-3'>
//         <ChevronRight size='1rem' />
//       </div>
//     </ReactstrapListGroupItem>
//   );
// }

// Deploy.propTypes = {
//   deploy: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     state: PropTypes.string.isRequired,
//     start: PropTypes.string.isRequired,
//   }),
//   onViewDeploy: PropTypes.func,
// };
