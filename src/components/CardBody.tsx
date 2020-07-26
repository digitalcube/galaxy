import React from "react"
import styled from "styled-components"
import { components } from "../styles"

export type CardBody = {
  children: React.ReactNode
}

const StyledCardBody = styled.div`
  padding: 0 ${components.padding};
`

export const CardBody: React.FC<CardBody> = ({ children }: CardBody) => (
  <StyledCardBody>{children}</StyledCardBody>
)
