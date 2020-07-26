import React from "react"
import styled from "styled-components"
import { components } from "../styles"
import { Heading } from "./Heading"

export type CardFooter = {
  content: {
    title?: string
  }
}

const StyledCardFooter = styled.div`
  padding: 0 ${components.padding};
`

export const CardFooter: React.FC<CardFooter> = ({ content }: CardFooter) => (
  <StyledCardFooter>
    <Heading content={content} />
  </StyledCardFooter>
)
