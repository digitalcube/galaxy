import React from "react"
import {
  Container as ReactstrapContainer,
  Row as ReactstrapRow,
  Col as ReactstrapCol,
} from "reactstrap"
import { Button } from "./../../Button"

type Hero = {
  content: {
    title: string
    img?: React.ReactNode
    subtitle?: string
    href?: string
    buttonLabel?: string
    buttonFooter?: string
  }
}

type Img = {
  img: React.ReactNode
}

const Img: React.FunctionComponent<Img> = ({ img }: Img) => {
  if (!img) return null
  return <section>{img}</section>
}

export const Hero: React.FunctionComponent<Hero> = ({
  content: {
    title = `The static site generator for WordPress sites.`,
    subtitle = `Using Shifter, create or migrate WordPress sites in minutes that are scalable, secure from attacks, and 100% static with no security or caching plugins required.`,
    img,
    href = `https://www.getshifter.io/register`,
    buttonFooter = `No credit card required.`,
    buttonLabel = `Start a free trial`,
  },
}: Hero) => (
  <section className="d-flex flex-column justify-content-center mb-5 hero">
    <ReactstrapContainer>
      <ReactstrapRow>
        <ReactstrapCol lg="5">
          <h1 className="display-1 mt-5">{title}</h1>
          <p className="font-size-lg">{subtitle}</p>
          <Button content={{ label: buttonLabel, href }} />
          <p className="text-monospace text-uppercase mt-3">{buttonFooter}</p>
        </ReactstrapCol>
        <ReactstrapCol lg="7">
          <Img img={img} />
        </ReactstrapCol>
      </ReactstrapRow>
    </ReactstrapContainer>
  </section>
)
