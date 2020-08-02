import React from "react"
import styled from "styled-components"

type Heading = {
  tag?: string
  size?: string
  children?: React.ReactNode
}

const StyledHeading = styled.h3``

export const Heading: React.FunctionComponent<Heading> = ({
  children = null,
  tag = ``,
}: Heading) => {
  if (!children) return null
  return <StyledHeading>{children}</StyledHeading>
}
