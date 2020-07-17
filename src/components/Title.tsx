import React from "react"

type Title = {
  content: {
    title: string
    href?: string
  }
  className?: string
}

export const Title: React.FunctionComponent<Title> = ({
  content: { title, href },
  className,
}: Title) => (
  <a href={href}>
    <h2 className={`text-primary h3 ${className}`}>{title}</h2>
  </a>
)
