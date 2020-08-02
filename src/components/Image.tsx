import React from "react"
import styled from "styled-components"

type Image = {
  children?: React.ReactNode
}

const StyledImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`

export const Image: React.FunctionComponent<Image> = ({
  children = ``,
}: Image) => <StyledImage>{children}</StyledImage>
