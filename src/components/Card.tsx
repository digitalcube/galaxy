import React from "react"
import {
  Card as ReactstrapCard,
  CardHeader as ReactstrapCardHeader,
  CardTitle as ReactstrapCardTitle,
  CardBody as ReactstrapCardBody,
  CardSubtitle as ReactstrapCardSubtitle,
  CardFooter as ReactstrapCardFooter,
  CardImg as ReactstrapCardImg,
} from "reactstrap"

type Card = {
  title?: string
  subtitle?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  action?: React.ReactNode
  id?: string
  img?: string
  href?: string
}

const CardImg = ({ img, href }: Card) => {
  if (!img) return null
  if (href)
    return (
      <a href={href}>
        <ReactstrapCardImg src={img} />
      </a>
    )
  return <ReactstrapCardImg src={img} />
}

const CardTitle = ({ title }: Card) => {
  if (!title) return null
  return <ReactstrapCardTitle>{title}</ReactstrapCardTitle>
}

const CardSubtitle = ({ subtitle }: Card) => {
  if (!subtitle) return null
  return <ReactstrapCardSubtitle>{subtitle}</ReactstrapCardSubtitle>
}

const CardAction = ({ action }: Card) => {
  if (!action) return null
  return <div className="action">{action}</div>
}

const CardHeader = ({ title, subtitle, action }: Card) => {
  if (!title && !subtitle) return null
  return (
    <ReactstrapCardHeader>
      <div className="d-flex justify-content-between align-items-center">
        <CardTitle title={title} />
        <CardAction action={action} />
      </div>
      <CardSubtitle subtitle={subtitle} />
    </ReactstrapCardHeader>
  )
}

const CardFooter = ({ footer }: Card) => {
  if (!footer) return null
  return <ReactstrapCardFooter>{footer}</ReactstrapCardFooter>
}

export const Card = ({
  title,
  subtitle,
  action,
  children,
  footer,
  id,
  img,
  href,
}: Card) => (
  <ReactstrapCard id={id}>
    <CardImg href={href} img={img} />
    <CardHeader title={title} subtitle={subtitle} action={action} />
    {children ? <ReactstrapCardBody>{children}</ReactstrapCardBody> : null}
    <CardFooter footer={footer} />
  </ReactstrapCard>
)
