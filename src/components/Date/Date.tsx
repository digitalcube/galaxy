import React from "react"
import { publishedDate } from "./../../lib/utils"

type Date = {
  children?: string
}

export const Date: React.FC<Date> = ({ children = `` }: Date) => {
  if (!children) return null
  return <time>{publishedDate({ children })}</time>
}
