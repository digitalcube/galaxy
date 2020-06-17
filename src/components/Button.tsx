// src/components/Badge.js

import React from "react"
import { Button as ReactstrapButton } from "reactstrap"

type Button = {
  color: string
  label: string
}

export const Button = ({ label, color = `primary` }: Button) => (
  <ReactstrapButton color={color}>{label}</ReactstrapButton>
)
