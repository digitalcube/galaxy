import React from "react"

type Heading = {
  content: {
    title: string
    href?: string
  }
  className?: string
}

export const Heading: React.FunctionComponent<Heading> = ({
  content: { title, href },
  className,
}: Heading) => (
  <a href={href}>
    <h2 className={`text-primary h3 ${className}`}>{title}</h2>
  </a>
)
