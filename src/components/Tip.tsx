// src/components/Tip.js

import React from "react"
import { UncontrolledTooltip as ReactstrapUncontrolledTooltip } from "reactstrap"
import shortid from "shortid"

type Tip = {
  label: string
  tip: string
  id?: string
}

export const Tip = ({ label, tip, id = `tip-` + shortid.generate() }: Tip) => (
  <>
    <span id={id}>{label}</span>
    <ReactstrapUncontrolledTooltip target={id}>
      <span>{tip}</span>
    </ReactstrapUncontrolledTooltip>
  </>
)
