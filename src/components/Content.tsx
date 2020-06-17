import React from "react"
import { Card } from "./Card"
import moment from "moment"
import "moment-duration-format"

type Content = {
  content: {
    img: string
    title: string
    date?: string
    author?: string
    href?: string
  }
}

type PublishedDate = {
  date?: string
}

function publishedDate({ date }: PublishedDate) {
  const d = moment(date).calendar(null, {
    sameDay: `[Today]`,
    lastWeek: `DD MMMM YYYY`,
    lastDay: `[Yesterday]`,
    sameElse: `DD MMMM YYYY`,
  })
  return d
}

export const Content = ({
  content: { img, title, date, href, author },
}: Content) => (
  <div>
    <Card href={href} img={img}>
      <a href={href}>
        <h2>{title}</h2>
      </a>
      <p>
        {publishedDate({ date: date })} | {author}
      </p>
    </Card>
  </div>
)
