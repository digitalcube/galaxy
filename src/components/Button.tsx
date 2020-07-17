// src/components/Badge.js

import React from "react"
import { Button as ReactstrapButton } from "reactstrap"

type Button = {
  content: {
    color?: string
    label: string
    href?: string
  }
}

export const Button: React.FunctionComponent<Button> = ({
  content: { label, color = `primary`, href },
}: Button) => (
  <ReactstrapButton href={href} color={color}>
    {label}
  </ReactstrapButton>
)
