import React from "react"
import styled from "styled-components"

type Heading = {
  content: any
}

const StyledHeading = styled.h3``

export const Heading: React.FunctionComponent<Heading> = ({
  content: {
    title = `“I could calculate your chance of survival, but you won’t like it.” –Marvin`,
  },
}: Heading) => <StyledHeading>{title}</StyledHeading>
