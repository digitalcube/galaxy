import React from "react"
import { Card } from "./Card"
import { Heading } from "./Heading"
import { publishedDate } from "./../utils"

export type Post = {
  content?: {
    title?: string
    subtitle?: string
    excerpt?: string
    author?: string
    date?: string
    img?: React.ReactNode
    link?: string
  }
}

export const Post: React.FC<Post> = ({
  content = {
    title: ``,
    subtitle: ``,
    excerpt: ``,
    date: ``,
    author: ``,
    link: ``,
    img: null,
  },
}: Post) => {
  const { title, img, date, link, author } = content
  return (
    <Card
      content={{
        image: {
          img: img,
        },
      }}
    >
      <a href={link}>
        <Heading>{title}</Heading>
      </a>
      <small>
        {author} - {publishedDate({ date })}
      </small>
    </Card>
  )
}
