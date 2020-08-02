import React from "react"
import styled from "styled-components"
import { colors, components } from "./../styles"
import { CardImage } from "./CardImage"
import { CardHeader } from "./CardHeader"
import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"

export type Card = {
  content?: {
    header?: {
      title?: string
      subtitle?: string
      excerpt?: string
    }
    footer?: {
      title?: string
    }
    image?: {
      img?: React.ReactNode
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
  content = {
    header: {
      title: ``,
      subtitle: ``,
      excerpt: ``,
    },
    footer: {
      title: ``,
    },
    image: {
      img: ``,
    },
  },
  children = null,
}: Card) => {
  const { header, footer, image } = content
  return (
    <StyledCard>
      <CardImage content={image} />
      <CardHeader content={header} />
      <CardBody>{children}</CardBody>
      <CardFooter content={footer} />
    </StyledCard>
  )
}
