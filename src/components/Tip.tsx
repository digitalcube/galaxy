// src/components/Tip.js

import React from "react";
import { UncontrolledTooltip as ReactstrapUncontrolledTooltip } from "reactstrap";

type Tip = {
  label: string;
  tip: string;
};

export const Tip = ({ label, tip }: Tip) => (
  <>
    <div id='DashboardTip'>{label}</div>
    <ReactstrapUncontrolledTooltip placement='right' target='DashboardTip'>
      {tip}
    </ReactstrapUncontrolledTooltip>
  </>
);
