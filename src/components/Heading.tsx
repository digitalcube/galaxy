import React from "react"
import styled from "styled-components"

type Heading = {
  content?: {
    title?: string
  }
}

const StyledHeading = styled.h3``

export const Heading: React.FC<Heading> = ({
  content = { title: `` },
}: Heading) => {
  const { title } = content
  return <StyledHeading>{title}</StyledHeading>
}
