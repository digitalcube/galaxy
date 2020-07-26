import React from "react"
import styled from "styled-components"
import { colors, components } from "./../styles"
import { CardHeader } from "./CardHeader"
import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"

export type Card = {
  content: {
    header: {
      title?: string
    }
    footer: {
      title?: string
    }
  }
  children?: React.ReactNode
}

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  background-color: ${colors.white};
  border-radius: ${components.borderRadius};
  box-shadow: ${components.boxShadow};
`

export const Card: React.FC<Card> = ({
  content: { header, footer },
  children,
}: Card) => (
  <StyledCard>
    <CardHeader content={header} />
    <CardBody>{children}</CardBody>
    <CardFooter content={footer} />
  </StyledCard>
)
