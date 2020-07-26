import React from "react"
import styled from "styled-components"
import { components } from "./../styles"
import { Heading } from "./Heading"

export type CardHeader = {
  content: {
    title?: string
  }
}

const StyledCardHeader = styled.div`
  padding: 0 ${components.padding};
`

export const CardHeader: React.FC<CardHeader> = ({ content }: CardHeader) => (
  <StyledCardHeader>
    <Heading content={content} />
  </StyledCardHeader>
)
