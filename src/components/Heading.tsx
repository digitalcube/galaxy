import React from "react"
import styled from "styled-components"

type Heading = {
  tag?: string
  size?: string
  children?: string
}

const StyledHeading = styled.h2``

export const Heading: React.FunctionComponent<Heading> = ({
  children = ``,
  tag = ``,
}: Heading) => <StyledHeading>{children}</StyledHeading>
